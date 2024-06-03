import { Oleo_Script, Alegreya, Almarai } from "next/font/google";

// FONTS MUST BE ADDED TO HTML CLASS

export const oleoScript = Oleo_Script({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-oleoscript",
});

export const alegreya = Alegreya({
  subsets: ["latin"],
  variable: "--font-alegreya",
});

export const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-almarai",
});
