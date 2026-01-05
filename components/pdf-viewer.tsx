"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, X, FileText, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import react-pdf components with no SSR
const Document = dynamic(() => import("react-pdf").then((mod) => mod.Document), { ssr: false });

const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), { ssr: false });

// Configure PDF.js worker
if (typeof window !== "undefined") {
  import("react-pdf/dist/Page/AnnotationLayer.css");
  import("react-pdf/dist/Page/TextLayer.css");

  import("react-pdf").then((module) => {
    module.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${module.pdfjs.version}/build/pdf.worker.min.mjs`;
  });
}

interface PDFViewerProps {
  pdfUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export function PDFViewer({ pdfUrl, isOpen, onClose }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [viewportHeight, setViewportHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  // Detect container width and viewport height for responsive PDF scaling
  // Uses window.innerHeight to handle iOS Safari URL bar appearing/disappearing
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateDimensions = () => {
      // Account for padding (16px on each side on mobile, more on desktop)
      const isMobile = window.innerWidth < 640;
      const padding = isMobile ? 16 : 32;
      const maxWidth = Math.min(window.innerWidth - padding * 2, 800);
      setContainerWidth(maxWidth);
      setViewportHeight(window.innerHeight);

      // Set initial scale based on screen size
      if (isMobile) {
        setScale(1.2);
      } else {
        setScale(1.0);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    // Also listen for visual viewport changes (iOS Safari URL bar)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", updateDimensions);
    }
    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", updateDimensions);
      }
    };
  }, [isOpen]);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  }, []);

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));
  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2.5));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.3));

  if (!isOpen) return null;

  const isMobile = containerWidth < 500;
  // Calculate modal height dynamically to handle iOS Safari URL bar
  const modalHeight = isMobile
    ? viewportHeight - 16
    : Math.min(viewportHeight * 0.9, viewportHeight - 32);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4">
      <div
        className="flex w-full max-w-4xl flex-col rounded-xl bg-white shadow-2xl"
        style={{ height: modalHeight }}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 p-3 sm:p-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-[#fbb624]" />
            <h2 className="text-base font-semibold text-gray-900 sm:text-lg">Contrat</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 transition-colors hover:bg-gray-100"
            aria-label="Fermer"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Toolbar - Compact on mobile */}
        <div className="flex shrink-0 items-center justify-center gap-1 border-b border-gray-200 bg-gray-50 p-2 sm:gap-4 sm:p-3">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="rounded-lg p-1.5 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40 sm:p-2"
            aria-label="Page precedente"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <span className="min-w-16 text-center text-xs text-gray-600 sm:min-w-25 sm:text-sm">
            {isMobile
              ? `${pageNumber}/${numPages || "..."}`
              : `Page ${pageNumber} / ${numPages || "..."}`}
          </span>

          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="rounded-lg p-1.5 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40 sm:p-2"
            aria-label="Page suivante"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mx-1 h-5 w-px bg-gray-300 sm:mx-2 sm:h-6" />

          <button
            onClick={zoomOut}
            disabled={scale <= 0.3}
            className="rounded-lg p-1.5 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40 sm:p-2"
            aria-label="Zoom arriere"
          >
            <ZoomOut className="h-5 w-5" />
          </button>

          <span className="min-w-10 text-center text-xs text-gray-600 sm:min-w-12 sm:text-sm">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={zoomIn}
            disabled={scale >= 2.5}
            className="rounded-lg p-1.5 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40 sm:p-2"
            aria-label="Zoom avant"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
        </div>

        {/* PDF Content - Scrollable on mobile */}
        <div className="flex flex-1 justify-center overflow-auto bg-gray-100 p-2 sm:p-4">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-[#fbb624]" />
              <span className="mt-3 text-sm text-gray-600">Chargement...</span>
            </div>
          )}
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => console.error("PDF load error:", error)}
            loading=""
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              width={isMobile ? containerWidth : undefined}
              className="shadow-lg"
              renderTextLayer={!isMobile}
              renderAnnotationLayer={!isMobile}
            />
          </Document>
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-gray-200 bg-white p-3 sm:p-4">
          <button
            onClick={onClose}
            className="w-full rounded-lg bg-[#fbb624] px-6 py-3 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:bg-[#e5a520] hover:shadow-md sm:text-base"
          >
            J&apos;ai lu le contrat
          </button>
        </div>
      </div>
    </div>
  );
}
