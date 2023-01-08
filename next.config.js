/** @type {import('next').NextConfig} */

// eslint-disable-next-line
const webpack = require("webpack");
module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },

  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/rooms',
        permanent: false,
      },
    ]
  },

  images: {
    domains: ['i.pravatar.cc', 'c.pxhere.com'],

    },
    webpack: (config) => {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
          resource.request = resource.request.replace(/^node:/, "");
        })
      );
      config.resolve.fallback = { fs: false, path: false, url: false };
      return config;
    },
  }    



// https://nextjs.org/docs/api-reference/next.config.js/redirects