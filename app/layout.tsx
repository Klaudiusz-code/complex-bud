import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import CookieBanner from "@/components/CookieBanner";
import WelcomeScreen from "@/components/WelcomeScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Komplex Bud",
  description: "Twój opis...",
  verification: {
    google: "ZpbWXjTwIeaUWi2-cUoUSazZ1ppl5_2a8em-s2tTMX0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
   
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (!localStorage.getItem('complex-bud-visited')) {
                  document.documentElement.style.backgroundColor = '#050505';
                  document.documentElement.classList.add('show-welcome-screen');
                }
              })();
            `,
          }}
        />
      </head>

      <body className="bg-white dark:bg-black text-neutral-900 dark:text-white antialiased">
        <ThemeProvider>
          <WelcomeScreen />
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
