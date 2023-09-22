/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true
};

module.exports = {
  staticDirs: [{ from: '../public/assets', to: '/assets' }],
};
