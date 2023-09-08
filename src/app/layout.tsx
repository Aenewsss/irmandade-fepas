import './globals.css'
import type { Metadata } from 'next'
import { Averia_Serif_Libre } from "next/font/google"

const averiaSerifLibre = Averia_Serif_Libre({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Irmandade Fépas Barbearia',
  description: '',
  authors: {
    name: "Aenã Martinelli",
    url: "https://aenamartinelli.com.br"
  },
  creator: "Aenã Martinelli",
  category: "Barbearia, Estética e Saúde"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" />
        <script crossOrigin="anonymous" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" />
        <link rel="icon" href="favicon.png" type="image/png" />
      </head>

      <body className={averiaSerifLibre.className}>
        {children}
      </body>
    </html>
  )
}
