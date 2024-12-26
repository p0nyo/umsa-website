import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ArrowDown01Icon } from "hugeicons-react"; 
import Globe from "./components/Landing";
import ParticleBackground from "./components/ParticleBackground";

import { createClient } from "@/prismicio";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
})

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("settings");



  return {
    title: page.data.site_title,
    description: page.data.meta_description,
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
          type="text/javascript">
        </script>
      </Head>
      <body
        className={clsx(poppins.className, 
          'italic',
          'bg-umsaBlue',
        "bg-starImg bg-cover bg-fixed")}>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="opacity-65 absolute inset-0 bg-blueOverlay bg-fixed z-0"></div>
          <ParticleBackground />
          <Header />
          <div className="relative z-10" id="landing">
            <Globe />
            <div>
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
