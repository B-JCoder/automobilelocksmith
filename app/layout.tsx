import type React from "react"
import type { Metadata } from "next"
import { Oswald, Roboto, Poppins } from "next/font/google"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Automotive Locksmith - 24/7 Emergency Car Lockout Service | Bobie Kankum",
  description:
    "Professional automotive locksmith services by Bobie Kankum. Car lockouts, key duplication, smart key programming, ignition repair. Available 24/7 for emergencies. Call 770-795-5500",
  keywords:
    "automotive locksmith, car lockout, key duplication, smart key programming, ignition repair, emergency locksmith, 24/7 locksmith, Bobie Kankum",
  authors: [{ name: "Bobie Kankum" }],
  creator: "Bobie Kankum",
  publisher: "Bobbie Kankum Automotive Locksmith",
  robots: "index, follow",
  openGraph: {
    title: "Automotive Locksmith - 24/7 Emergency Car Lockout Service",
    description:
      "Professional automotive locksmith services. Car lockouts, key duplication, smart key programming. Available 24/7. Call 770-795-5500",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive Locksmith - 24/7 Emergency Service",
    description: "Professional car lockout and key services. Available 24/7. Call 770-795-5500",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable} ${poppins.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
