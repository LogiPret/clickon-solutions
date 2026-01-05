import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export interface ClientData {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  email: string;
}

/**
 * Fill a PDF template with client information
 * @param pdfUrl - URL or path to the template PDF
 * @param clientData - Client information to insert
 * @returns Blob of the filled PDF
 */
export async function fillPdfWithClientData(pdfUrl: string, clientData: ClientData): Promise<Blob> {
  // Fetch the existing PDF
  const existingPdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());

  // Load the PDF
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Embed a standard font
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Get the first page (you can modify this to target specific pages)
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { height } = firstPage.getSize();

  const fullName = `${clientData.firstName} ${clientData.lastName}`;
  const fullAddress = `${clientData.streetAddress}, ${clientData.city}, ${clientData.province} ${clientData.postalCode}`;

  // Example positions - ADJUST THESE based on your PDF template
  // You'll need to determine the exact X, Y coordinates where you want the text
  const textPositions = [
    // Position 1: Name at top of document
    {
      text: fullName,
      x: 100,
      y: height - 150,
      size: 12,
      font: boldFont,
    },
    // Position 2: Address below name
    {
      text: fullAddress,
      x: 100,
      y: height - 170,
      size: 10,
      font: font,
    },
    // Position 3: Name in signature area (example)
    {
      text: fullName,
      x: 100,
      y: 100,
      size: 12,
      font: boldFont,
    },
    // Add more positions as needed
  ];

  // Draw text at each position
  textPositions.forEach((position) => {
    firstPage.drawText(position.text, {
      x: position.x,
      y: position.y,
      size: position.size,
      font: position.font,
      color: rgb(0, 0, 0),
    });
  });

  // If you need to add the same info on multiple pages:
  // pages.forEach((page, index) => {
  //   if (index > 0) { // Skip first page if already done
  //     page.drawText(fullName, { x: 100, y: height - 150, size: 12, font: boldFont, color: rgb(0, 0, 0) })
  //   }
  // })

  // Serialize the PDFDocument to bytes
  const pdfBytes = await pdfDoc.save();

  // Convert to Blob
  return new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
}

/**
 * Alternative: If your PDF has form fields, you can fill them directly
 * This is more reliable if your PDF template has fillable form fields
 */
export async function fillPdfFormFields(pdfUrl: string, clientData: ClientData): Promise<Blob> {
  console.log("[pdfFiller] Starting fillPdfFormFields with URL:", pdfUrl);
  console.log("[pdfFiller] Client data:", clientData);

  console.log("[pdfFiller] Fetching PDF...");
  const response = await fetch(pdfUrl);
  if (!response.ok) {
    console.error("[pdfFiller] Failed to fetch PDF:", response.status, response.statusText);
    throw new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}`);
  }

  const existingPdfBytes = await response.arrayBuffer();
  console.log("[pdfFiller] PDF fetched, size:", existingPdfBytes.byteLength, "bytes");

  console.log("[pdfFiller] Loading PDF document...");
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  console.log("[pdfFiller] PDF loaded successfully");

  // Get the form
  console.log("[pdfFiller] Getting form...");
  const form = pdfDoc.getForm();

  // List all fields for debugging
  const fields = form.getFields();
  console.log(
    "[pdfFiller] Available form fields:",
    fields.map((f) => ({ name: f.getName(), type: f.constructor.name }))
  );

  const fullName = `${clientData.firstName} ${clientData.lastName}`;
  const fullAddress = `${clientData.streetAddress}, ${clientData.city}, ${clientData.province} ${clientData.postalCode}`;
  console.log("[pdfFiller] Full name:", fullName);
  console.log("[pdfFiller] Full address:", fullAddress);

  // Fill form fields based on your PDF template
  try {
    console.log("[pdfFiller] Filling form fields...");

    // Text1: Full name
    const text1 = form.getTextField("Text1");
    text1.setText(fullName);
    console.log("[pdfFiller] Set Text1");

    // Text2: Full name
    const text2 = form.getTextField("Text2");
    text2.setText(fullName);
    console.log("[pdfFiller] Set Text2");

    // Text3: Full name
    const text3 = form.getTextField("Text3");
    text3.setText(fullName);
    console.log("[pdfFiller] Set Text3");

    // Text4: Title (keep empty)
    const text4 = form.getTextField("Text4");
    text4.setText("");
    console.log("[pdfFiller] Set Text4");

    // Text5: Address
    const text5 = form.getTextField("Text5");
    text5.setText(fullAddress);
    console.log("[pdfFiller] Set Text5");

    // Text6: Phone
    const text6 = form.getTextField("Text6");
    text6.setText(clientData.phone);
    console.log("[pdfFiller] Set Text6");

    // Text7: Email
    const text7 = form.getTextField("Text7");
    text7.setText(clientData.email);
    console.log("[pdfFiller] Set Text7");

    // Flatten the form to make it non-editable
    console.log("[pdfFiller] Flattening form...");
    form.flatten();
    console.log("[pdfFiller] Form flattened");
  } catch (error) {
    console.error("[pdfFiller] Error filling form fields:", error);
    throw new Error("PDF form fields not found. The PDF might not have fillable form fields.");
  }

  console.log("[pdfFiller] Saving PDF...");
  const pdfBytes = await pdfDoc.save();
  console.log("[pdfFiller] PDF saved, size:", pdfBytes.byteLength, "bytes");

  const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
  console.log("[pdfFiller] Blob created, size:", blob.size);
  return blob;
}

/**
 * Download the filled PDF
 */
export function downloadPdf(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
