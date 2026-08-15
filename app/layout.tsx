import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import CookieBanner from "@/components/CookieBanner";

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
                var theme = localStorage.getItem('theme');
                var isDark = !theme || theme === 'dark'; 
                var html = document.documentElement;
                
                if (isDark) {
                  html.classList.add('dark');
                  html.style.backgroundColor = '#050505';
                } else {
                  html.classList.remove('dark');
                  html.style.backgroundColor = '#ffffff';
                }

                if (document.cookie.includes('complex_visited=true')) return;

                var splash = document.createElement('div');
                splash.id = 'splash-screen';
                if (isDark) splash.classList.add('dark-mode');

                splash.innerHTML = \`
                  <style>
                    /* --- ANIMACJE --- */
                    @keyframes splashFadeOut {
                      0% { opacity: 1; transform: scale(1); filter: blur(0px); }
                      100% { opacity: 0; transform: scale(1.05); filter: blur(4px); }
                    }
                    @keyframes fadeUp {
                      from { opacity: 0; transform: translateY(20px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes drawLine {
                      from { width: 0; opacity: 0; }
                      to { width: 100%; opacity: 1; }
                    }
                    @keyframes clipReveal {
                      from { clip-path: inset(100% 0 0 0); transform: translateY(10px); }
                      to { clip-path: inset(0 0 0 0); transform: translateY(0); }
                    }
                    @keyframes shimmer {
                      0% { transform: translateX(-150%); }
                      100% { transform: translateX(250%); }
                    }

                    /* --- GŁÓWNY KONTENER --- */
                    #splash-screen {
                      position: fixed; inset: 0; z-index: 99999;
                      background-color: #ffffff;
                      display: flex; flex-direction: column; align-items: center; justify-content: center;
                      transition: background-color 0.5s ease;
                      font-family: 'Inter', system-ui, -apple-system, sans-serif;
                      overflow: hidden;
                    }
                    #splash-screen.dark-mode { background-color: #050505; }
                    #splash-screen.exiting { animation: splashFadeOut 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; pointer-events: none; }
                    
                    /* --- TŁA --- */
                    .splash-bg {
                      position: absolute; inset: -20px; z-index: 0;
                      background-image: url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80');
                      background-size: cover; background-position: center;
                      filter: blur(4px) brightness(0.9);
                      opacity: 0.15; 
                      transition: opacity 0.5s, filter 0.5s;
                    }
                    .dark-mode .splash-bg { opacity: 0.2; filter: blur(6px) brightness(0.6); }

                    .splash-overlay {
                      position: absolute; inset: 0; z-index: 1;
                      background: radial-gradient(circle at 50% 40%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.95) 60%);
                      transition: background 0.5s;
                    }
                    .dark-mode .splash-overlay {
                      background: radial-gradient(circle at 50% 40%, rgba(5,5,5,0.6) 0%, rgba(5,5,5,0.9) 60%);
                    }

                    /* --- TREŚĆ --- */
                    .splash-content {
                      position: relative; z-index: 2;
                      display: flex; flex-direction: column; align-items: center;
                      text-align: center;
                      gap: 1.25rem; 
                      max-width: 500px;
                      padding: 0 20px;
                    }

                    .splash-logo {
                      width: 140px; 
                      opacity: 0; animation: fadeUp 1s ease-out 0.2s forwards;
                      filter: drop-shadow(0 10px 15px rgba(0,0,0,0.05));
                    }
                    .dark-mode .splash-logo { filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3)); }
                    
                    .splash-line-container { width: 120px; height: 1px; }
                    .splash-line {
                      height: 1px; width: 0;
                      background: linear-gradient(90deg, transparent, rgba(199, 165, 104, 0.7), transparent);
                      animation: drawLine 1.5s ease-out 0.6s forwards;
                    }

                    /* NOWY: MOCNY NAGŁÓWEK */
                    .splash-headline {
                      color: #171717; 
                      font-size: 1.1rem; 
                      font-weight: 600; line-height: 1.3;
                      letter-spacing: -0.01em;
                      margin-top: 0.5rem;
                      opacity: 0; animation: clipReveal 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.8s forwards;
                    }
                    .dark-mode .splash-headline { color: #ffffff; }

                    /* OPIS POWITALNY */
                    .splash-text {
                      color: #737373; font-size: 0.7rem; 
                      letter-spacing: 0.15em; text-transform: uppercase; font-weight: 400;
                      opacity: 0; animation: fadeUp 1s ease-out 1.1s forwards;
                      line-height: 1.6;
                    }
                    .dark-mode .splash-text { color: #a3a3a3; }

                    /* SHIMMER LOADER */
                    .splash-loader {
                      width: 80px; height: 2px; 
                      background: rgba(199, 165, 104, 0.15);
                      border-radius: 2px; overflow: hidden;
                      opacity: 0; animation: fadeUp 0.5s ease-out 1.3s forwards;
                      position: relative;
                      margin-top: 0.5rem;
                    }
                    .splash-loader-fill {
                      height: 100%; width: 0%;
                      background: rgba(199, 165, 104, 0.4);
                      border-radius: 2px;
                      animation: loadBar 2.5s cubic-bezier(0.4, 0, 0.2, 1) 1.4s forwards;
                      position: relative;
                      overflow: hidden;
                    }
                    .splash-loader-fill::after {
                      content: '';
                      position: absolute; inset: 0;
                      background: linear-gradient(90deg, transparent, rgba(199, 165, 104, 1), transparent);
                      animation: shimmer 1.8s infinite linear 1.4s;
                      transform: translateX(-150%);
                    }
                    
                    /* PRZYCISK ZE ŚWIATŁEM (SWEEP) */
                    .splash-btn {
                      position: relative; overflow: hidden;
                      background: rgba(23,23,23,0.95); color: white; border: none; 
                      padding: 14px 32px;
                      font-size: 0.65rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;
                      cursor: pointer; border-radius: 6px; display: flex; align-items: center; gap: 10px;
                      transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
                      box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);
                      opacity: 0; animation: fadeUp 1s ease-out 1.5s forwards;
                      z-index: 1;
                      margin-top: 0.5rem;
                    }
                    .splash-btn::before {
                      content: '';
                      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                      background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
                      transform: translateX(-100%);
                      transition: transform 0.6s ease;
                      z-index: -1;
                    }
                    .splash-btn:hover::before { transform: translateX(100%); }
                    
                    .splash-btn:hover { background: rgba(40,40,40,0.95); transform: translateY(-2px); box-shadow: 0 15px 40px -10px rgba(0,0,0,0.3); }
                    .splash-btn:active { transform: scale(0.97) translateY(0); }
                    .dark-mode .splash-btn { 
                      background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); 
                      box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
                    }
                    .dark-mode .splash-btn:hover { background: rgba(255,255,255,0.12); box-shadow: 0 15px 40px -10px rgba(0,0,0,0.6); }
                    .splash-btn svg { width: 16px; height: 16px; transition: transform 0.3s; }
                    .splash-btn:hover svg { transform: translateX(4px); }

                    /* --- PRZEŁĄCZNIK --- */
                    .splash-toggle-wrap { 
                      position: absolute; top: 24px; left: 50%; transform: translateX(-50%); 
                      z-index: 10; opacity: 0; animation: fadeUp 0.8s ease-out 1.8s forwards;
                    }
                    .splash-toggle {
                      width: 56px; height: 30px; border-radius: 999px; border: none; cursor: pointer;
                      background: #e5e5e5; position: relative; transition: background 0.3s;
                      display: flex; align-items: center; padding: 3px;
                    }
                    .dark-mode .splash-toggle { background: #262626; }
                    .splash-thumb {
                      width: 24px; height: 24px; border-radius: 50%;
                      background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                      display: flex; align-items: center; justify-content: center;
                      transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s, box-shadow 0.3s;
                    }
                    .dark-mode .splash-thumb {
                      transform: translateX(26px); background: #C7A568; box-shadow: 0 0 15px rgba(199, 165, 104, 0.4);
                    }
                    .splash-thumb svg { display: none; }
                    .splash-thumb .icon-sun { display: block; width: 14px; height: 14px; color: #f59e0b; }
                    .dark-mode .splash-thumb .icon-sun { display: none; }
                    .dark-mode .splash-thumb .icon-moon { display: block; width: 12px; height: 12px; color: white; }

                    /* --- RESPONSYWNE --- */
                    @media (min-width: 640px) {
                      .splash-content { gap: 1.5rem; max-width: 600px; }
                      .splash-logo { width: 180px; }
                      .splash-line-container { width: 160px; }
                      .splash-headline { font-size: 1.35rem; }
                      .splash-text { font-size: 0.75rem; letter-spacing: 0.2em; }
                      .splash-btn { padding: 16px 40px; font-size: 0.7rem; gap: 12px; }
                      .splash-loader { width: 100px; }
                      .splash-bg { filter: blur(6px) brightness(0.9); }
                    }

                    @media (min-width: 1024px) {
                      .splash-content { gap: 1.75rem; max-width: 700px; }
                      .splash-logo { width: 220px; }
                      .splash-line-container { width: 200px; }
                      .splash-headline { font-size: 1.6rem; }
                      .splash-text { font-size: 0.8rem; }
                      .splash-btn { padding: 18px 48px; font-size: 0.75rem; gap: 14px; }
                      .splash-loader { width: 120px; }
                      .splash-bg { filter: blur(8px) brightness(0.9); }
                      .dark-mode .splash-bg { filter: blur(10px) brightness(0.6); }
                    }
                  </style>

                  <div class="splash-bg"></div>
                  <div class="splash-overlay"></div>

                  <div class="splash-toggle-wrap">
                    <button class="splash-toggle" onclick="toggleSplashTheme()">
                      <div class="splash-thumb">
                        <svg class="icon-sun" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                        <svg class="icon-moon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                      </div>
                    </button>
                  </div>

                  <div class="splash-content">
                    <img src="/logos.svg" alt="Logo" class="splash-logo" draggable="false" />
                    <div class="splash-line-container"><div class="splash-line"></div></div>
                    
                    <!-- CHWYTLIWY NAGŁÓWEK -->
                    <h1 class="splash-headline">Solidność, precyzja i nowoczesne wykończenie.</h1>
                    
                    <!-- OPISOWY TEKST POWITALNY -->
                    <p class="splash-text">Twój partner w kompleksowych realizacjach budowlanych najwyższej jakości.</p>

                    <div class="splash-loader">
                      <div class="splash-loader-fill"></div>
                    </div>

                    <button class="splash-btn" onclick="closeSplash()">
                      Przejdź na stronę
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </button>
                  </div>
                \`;

                html.prepend(splash);

                window.toggleSplashTheme = function() {
                  var isNowDark = html.classList.toggle('dark');
                  var splashEl = document.getElementById('splash-screen');
                  if (isNowDark) {
                    splashEl.classList.add('dark-mode');
                    html.style.backgroundColor = '#050505';
                    localStorage.setItem('theme', 'dark');
                  } else {
                    splashEl.classList.remove('dark-mode');
                    html.style.backgroundColor = '#ffffff';
                    localStorage.setItem('theme', 'light');
                  }
                };

                window.closeSplash = function() {
                  var el = document.getElementById('splash-screen');
                  el.classList.add('exiting');
                  document.documentElement.style.backgroundColor = ''; 
                  document.cookie = "complex_visited=true; path=/; max-age=" + (60*60*24*365);
                  setTimeout(function() { el.remove(); }, 800);
                };
              })();
            `,
          }}
        />
      </head>

      <body className="bg-white dark:bg-black text-neutral-900 dark:text-white antialiased">
        <ThemeProvider>
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}