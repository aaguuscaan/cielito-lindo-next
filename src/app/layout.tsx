import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { EggToast } from "@/components/EggToast";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agus — Junior AI Engineer & Web Developer",
  description:
    "Portfolio de Agustina, Junior AI Engineer y Web Developer de Argentina. Sitios web, agentes de IA y experiencias digitales hechas con cuidado.",
  openGraph: {
    title: "Agus — Junior AI Engineer & Web Developer",
    description:
      "Portfolio de Agustina, Junior AI Engineer y Web Developer de Argentina.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Providers>
          {children}
          <EggToast />
        </Providers>
      </body>
    </html>
  );
}
