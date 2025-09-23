/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: require('path').join(__dirname, '../../'),
};

module.exports = nextConfig;
