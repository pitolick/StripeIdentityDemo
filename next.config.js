/**
 * サブディレクトリにデプロイする場合の設定参考
 * @see https://qiita.com/hiropy0123/items/02ab91f69dbfa4e2797f
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
      },
    ],
  },
}

module.exports = nextConfig
