import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/store/ReduxProvider';
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'KnowledgePulse | Modern LMS & Community Platform',
  description: 'KnowledgePulse is a modern LMS and community platform for learners and educators.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("antialiased", inter.variable, plusJakarta.variable)}>
      <body suppressHydrationWarning className="font-sans">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
