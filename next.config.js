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
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig 