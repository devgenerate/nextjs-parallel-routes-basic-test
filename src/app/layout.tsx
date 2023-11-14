import { Metadata } from "next"

import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: 'My test with app router'
}

interface Props {
  children: React.ReactNode
}


import './globals.css'

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <section className="root-layout flex flex-col">
          <Navbar />
          {props.children}
        </section>
      </body>
    </html>
  )
}
