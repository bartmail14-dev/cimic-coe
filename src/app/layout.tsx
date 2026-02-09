// 1️⃣ Eerst alle imports bovenaan
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";

// 2️⃣ Metadata (staat boven RootLayout)
export const metadata = {
  title: 'CIMIC – Static Site',
  description: 'Statische export met Next.js'
};

// 3️⃣ De RootLayout-functie zelf
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />   {/*  👈 Hier zet je hem: direct onder {children}  */}
      </body>
    </html>
  );
}
