/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@acme/ui'],
  },
  // webpack: (config, { isServer }) => {
  //   // Tambahkan aturan untuk mengabaikan file HTML dari node-pre-gyp
  //   config.module.rules.push({
  //     test: /\.html$/,
  //     use: 'ignore-loader', // Gunakan ignore-loader untuk mengabaikan file HTML
  //   });

  //   return config;
  // },
}

module.exports = nextConfig
