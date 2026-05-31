import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OrderHubbs - Your Ultimate E-Commerce Platform',
  description: 'Shop from multiple online stores and earn rewards with our gamified e-commerce platform',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
