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
  title: 'UMSA New Zealand',
  description: 'The Official Page of the Union of Malaysian Students in Auckland, NZ',
  openGraph: {
    title: 'UMSA New Zealand',
    description: 'The Official Page of the Union of Malaysian Students in Auckland NZ',
    url: 'https://www.umsanz.com',
    images: [
      {
        url: 'umsa-og-image.svg',
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
      <body
        className={clsx(poppins.className, 
          'italic',
          'bg-umsaBlue',
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
