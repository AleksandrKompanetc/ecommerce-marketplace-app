import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './(components)/Header'
import { Provider } from './Provider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Marketplace App",
  description: "Modern marketplace built with Next.js and TypeScript",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Provider>
          <Header />
          <main className="pt-16 container mx-auto px-4">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
} 