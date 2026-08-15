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
                // 1. ANTY-MRUGNIĘCIA MOTYWU
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

                // 2. EKRAN POWITALNY
                if (document.cookie.includes('complex_visited=true')) return;

                var splash = document.createElement('div');
                splash.id = 'splash-screen';
                if (isDark) splash.classList.add('dark-mode');

                splash.innerHTML = \`
                  <style>
                    @keyframes splashFadeOut {
                      0% { opacity: 1; transform: scale(1); filter: blur(0px); }
                      100% { opacity: 0; transform: scale(1.05); filter: blur(4px); }
                    }
                    @keyframes fadeUp {
                      from { opacity: 0; transform: translateY(25px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes drawLine {
                      from { width: 0; opacity: 0; }
                      to { width: 160px; opacity: 1; }
                    }
                    @keyframes slowZoom {
                      0% { transform: scale(1.1); }
                      100% { transform: scale(1.2); }
                    }

                    /* GŁÓWNY KONTENER */
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
                    
                    /* TŁO - ZDJĘCIE CINEMATYCZNE */
                    .splash-bg {
                      position: absolute; inset: 0; z-index: 0;
                      background-image: url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80');
                      background-size: cover; background-position: center;
                      filter: blur(6px) brightness(0.9);
                      opacity: 0.15; transform: scale(1.1);
                      animation: slowZoom 20s ease-in-out infinite alternate;
                      transition: opacity 0.5s;
                    }
                    .dark-mode .splash-bg { opacity: 0.2; filter: blur(8px) brightness(0.6); }

                    /* TŁO - SPOTLIGHT I GRADIENTY */
                    .splash-overlay {
                      position: absolute; inset: 0; z-index: 1;
                      background: radial-gradient(circle at 50% 40%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.95) 60%);
                      transition: background 0.5s;
                    }
                    .dark-mode .splash-overlay {
                      background: radial-gradient(circle at 50% 40%, rgba(5,5,5,0.5) 0%, rgba(5,5,5,0.9) 60%);
                    }

                    /* TREŚĆ */
                    .splash-content {
                      position: relative; z-index: 2;
                      display: flex; flex-direction: column; align-items: center;
                      padding: 0 20px; margin-bottom: 15vh;
                    }

                    /* ELEMENTY */
                    .splash-logo {
                      width: clamp(180px, 40vw, 280px); 
                      margin-bottom: clamp(2rem, 5vw, 3.5rem);
                      opacity: 0; animation: fadeUp 1s ease-out 0.2s forwards;
                    }
                    
                    .splash-line-container { height: 1px; display: flex; justify-content: center; margin-bottom: clamp(1.5rem, 4vw, 2.5rem); }
                    .splash-line {
                      height: 1px; width: 0;
                      background: linear-gradient(90deg, transparent, rgba(199, 165, 104, 0.7), transparent);
                      animation: drawLine 1.5s ease-out 0.6s forwards;
                    }

                    .splash-text {
                      color: #737373; 
                      font-size: clamp(0.65rem, 1.5vw, 0.8rem); 
                      letter-spacing: 0.3em; text-transform: uppercase; font-weight: 300;
                      margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
                      opacity: 0; animation: fadeUp 1s ease-out 0.8s forwards;
                      text-align: center;
                    }
                    .dark-mode .splash-text { color: #a3a3a3; }
                    
                    .splash-btn {
                      background: rgba(23,23,23,0.95); color: white; border: none; 
                      padding: clamp(14px, 2vw, 18px) clamp(36px, 6vw, 48px);
                      font-size: clamp(0.65rem, 1.5vw, 0.75rem); font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;
                      cursor: pointer; border-radius: 6px; display: flex; align-items: center; gap: 12px;
                      transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
                      box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);
                      opacity: 0; animation: fadeUp 1s ease-out 1.1s forwards;
                    }
                    .splash-btn:hover { background: rgba(40,40,40,0.95); transform: translateY(-2px); box-shadow: 0 15px 40px -10px rgba(0,0,0,0.3); }
                    .splash-btn:active { transform: scale(0.97) translateY(0); }
                    .dark-mode .splash-btn { 
                      background: rgba(255,255,255,0.07); 
                      border: 1px solid rgba(255,255,255,0.1); 
                      box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
                    }
                    .dark-mode .splash-btn:hover { background: rgba(255,255,255,0.12); box-shadow: 0 15px 40px -10px rgba(0,0,0,0.6); }
                    .splash-btn svg { width: 16px; height: 16px; transition: transform 0.3s; }
                    .splash-btn:hover svg { transform: translateX(4px); }

                    /* THEME TOGGLE */
                    .splash-toggle-wrap { 
                      position: absolute; top: clamp(20px, 4vh, 40px); left: 50%; transform: translateX(-50%); 
                      z-index: 10; opacity: 0; animation: fadeUp 0.8s ease-out 1.4s forwards;
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
                    <p class="splash-text">Witajcie na stronie Komplex-Bud</p>
                    <button class="splash-btn" onclick="closeSplash()">
                      Wejdź
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
                  setTimeout(function() { el.remove(); }, 800); // Wydłużone do 0.8s dla lepszego efektu rozmycia
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