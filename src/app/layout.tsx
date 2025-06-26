import { ReactNode } from "react";
import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <link
          href="https://fonts.cdnfonts.com/css/space-grotesk"
          rel="stylesheet"
        />
        <body className="bg-grid">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </body>
    </html>
  )
}
