/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')();

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './themes.config.tsx',
  codeHighlight: false
});

module.exports = removeImports(
  withNextra({
    experimental: { esmExternals: true },
    transpilePackages: ['data'],
    reactStrictMode: true
  })
);
