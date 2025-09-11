import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    // domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    domains: ["s3.qpay.mn", "qpay.mn"],
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: "standalone",
//   images: {
//     domains: ["s3.qpay.mn", "qpay.mn"],
//   },
// };

// export default nextConfig;
