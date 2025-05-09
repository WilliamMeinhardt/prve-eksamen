import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/CookieConsent"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Impact IT - Utleie av IT-utstyr",
  description: "Impact IT er et norsk selskap som tilbyr utleie av IT-utstyr til bedrifter og privatpersoner.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <head>
        <Script
          id="cookie-consent"
          src="https://policy.app.cookieinformation.com/uc.js"
          data-culture="NB"
          data-gcm-version="2.0"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} bg-[#f5f2ed]`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
