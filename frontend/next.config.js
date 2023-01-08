/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
});

module.exports = withPWA({
  trailingSlash: true,
  distDir: 'build',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
});
