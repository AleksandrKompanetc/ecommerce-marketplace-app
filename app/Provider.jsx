'use client'

import { ThemeProvider } from 'next-themes'
import { Suspense } from 'react'

export function Provider({ children }) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </Suspense>
    </>
  )
} 