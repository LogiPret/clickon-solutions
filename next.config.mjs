import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Handle canvas for react-pdf
    if (isServer) {
      config.resolve.alias.canvas = false;
    }
    
    // Externalize canvas for server-side rendering
    config.externals = config.externals || [];
    config.externals.push('canvas');
    
    return config;
  },
};

export default withNextIntl(nextConfig);
