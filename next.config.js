/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ❗ Включать только для продакшена
    ignoreBuildErrors: false,
    
    // Строгая проверка типов
    strict: true
  },
  
  // Оптимизация изображений
  images: {
    domains: ['your-domain.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Улучшение производительности
  swcMinify: true,
  
  // Экспериментальные функции
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [],
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Настройка заголовков безопасности
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ]
  },

  // Настройка редиректов
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 