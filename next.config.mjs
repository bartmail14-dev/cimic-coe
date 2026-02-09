/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // maakt automatisch /out bij `npm run build`
  trailingSlash: true,        // prettig voor statische hosts
  images: { unoptimized: true }
};
export default nextConfig;
