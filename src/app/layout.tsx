import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import clsx from "clsx";
// import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
})

 
export const metadata: Metadata = {
  title: 'Union of Malaysian Students in Auckland',
  description: 'Connecting Malaysians across campus, our club celebrates Malaysian culture, fosters friendships, and creates a welcoming space for all students.',
  openGraph: {
    title: 'Union of Malaysian Students in Auckland',
    description: 'Connecting Malaysians across campus, our club celebrates Malaysian culture, fosters friendships, and creates a welcoming space for all students.',
    url: 'https://www.umsanz.com',
    images: [
      {
        url: 'umsa-og-optimised.svg',
        width: 1200,
        height: 630,
        alt: 'UMSA New Zealand'
      }
    ],
  },
}
 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
          type="text/javascript">
        </script>
      </Head> */}
      <head>
        <link rel="preload" href="star-background.jpg" as="image" />
        <Analytics />
        <SpeedInsights />
      </head>
      <body
        className={clsx(poppins.className, 
          'italic',
          'bg-starBlue',
        "bg-starImg bg-cover bg-fixed")}>
        <div className="relative min-h-screen overflow-x-hidden" id="landing">
          <div className="opacity-65 absolute inset-0 bg-blueOverlay bg-fixed z-0"></div>
          {/* <ParticleBackground /> */}
          <div className="relative">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
