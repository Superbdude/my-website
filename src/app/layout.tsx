import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import WhatsAppBubble from"./components/WhatsAppBubble"
import CodeBackground from "./components/CodeBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oguntade Razak Damilare | Full-Stack Developer",
  description: "A passionate full-stack developer crafting beautiful, functional web experiences. I turn ideas into elegant solutions with clean code and modern design.",
  icons: {
    icon: "/passp.png",
  },
  openGraph: {
    title: "Oguntade Razak Damilare | Full-Stack Developer",
    description: "A passionate full-stack developer crafting beautiful, functional web experiences. I turn ideas into elegant solutions with clean code and modern design.",
    url: "https://oguntade-razak.me",
    siteName: "Oguntade Razak Damilare",
    images: [
      {
        url: "/passp.png",
        width: 1200,
        height: 1200,
        alt: "Oguntade Razak Damilare - Full-Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oguntade Razak Damilare | Full-Stack Developer",
    description: "A passionate full-stack developer crafting beautiful, functional web experiences. I turn ideas into elegant solutions with clean code and modern design.",
    images: ["/passp.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <CodeBackground />
        <div className="relative z-10">
          <Navigation />
          {children}
          <WhatsAppBubble />
          <Footer />
        </div>
      </body>
    </html>
  );
}
