import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

// Update the metadata
export const metadata: Metadata = {
  title: "ImageL - Konverter Gambar ke Tautan",
  description: "Unggah gambar dan dapatkan tautan permanen secara instan",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
