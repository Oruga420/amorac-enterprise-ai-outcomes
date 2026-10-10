import "./globals.css";
import resume from "./resume.json";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600"],
});

export const metadata = {
  title: `Alejandro de la Mora | ${resume.title}`,
  description: resume.summary,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
