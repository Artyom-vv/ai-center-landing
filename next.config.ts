import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js'
                }
            }
        }
    },
    reactStrictMode: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    webpack(config) {
        // Добавляем правило для обработки SVG с помощью @svgr/webpack
        config.module.rules.push({
            test: /\.svg$/,
            use: [{loader: '@svgr/webpack', options: {icon: true}}]
          })
          return config
      },
};

export default nextConfig;
