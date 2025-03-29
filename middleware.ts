import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Добавляем заголовки безопасности
  const response = NextResponse.next()
  
  // Пример добавления CSP заголовков
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
  )

  // Добавляем заголовок для защиты от CSRF
  response.headers.set('X-CSRF-Protection', '1; mode=block')

  return response
}

export const config = {
  matcher: '/:path*',
} 