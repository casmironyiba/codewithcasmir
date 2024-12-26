// next.config.js
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['course.imageURL', 'firebasestorage.googleapis.com'], // Add your domain here
  },
  webpack: (config) => {
    // Enable the layers experiment
    ; (config.experiments = {
      ...config.experiments,
      layers: true, // Enable Webpack layers experiment
      asyncWebAssembly: true, // Enable async WebAssembly
    }),
      (compiler = {
        styledComponents: true, // Enable styled-components support
      }),
      // Add the Node Polyfill Plugin
      config.plugins.push(new NodePolyfillPlugin())

    return config
  },
}

module.exports = nextConfig
