import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import InteractiveBackground from "@/components/ui/InteractiveBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xephorix | Autonomous Infrastructure",
  description: "Enterprise workflow orchestration and neural infrastructure automation.",
  keywords: ["autonomous", "infrastructure", "neural engine", "edge computing", "webassembly", "zero-trust", "decentralized"],
  authors: [{ name: "Xephorix Systems" }],
  metadataBase: new URL("https://xephorix.ai"),
  openGraph: {
    title: "Xephorix | Autonomous Infrastructure",
    description: "Enterprise workflow orchestration and neural infrastructure automation.",
    url: "https://xephorix.ai",
    siteName: "Xephorix",
    images: [
      {
        url: "/images/neural_nodes.png",
        width: 1200,
        height: 630,
        alt: "Xephorix Neural Edge Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xephorix | Autonomous Infrastructure",
    description: "Enterprise workflow orchestration and neural infrastructure automation.",
    images: ["/images/neural_nodes.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-oceanic-noir text-arctic-powder selection:bg-forsythia selection:text-oceanic-noir relative">
        <div className="film-grain" />
        {children}
      </body>
    </html>
  );
}
