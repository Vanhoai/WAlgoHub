"use client"

import * as React from "react"
import LocalFont from "next/font/local"
import { ThemeProvider } from "@/components"
import "./globals.css"

const PalatinoLinotype = LocalFont({ src: "../fonts/palatinolinotype_roman.ttf" })

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <html
                lang="en"
                suppressHydrationWarning
                className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-500 scrollbar-track-slate-300 scrollbar-w-1 overflow-y-scroll"
            >
                <body suppressHydrationWarning className={PalatinoLinotype.className}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </React.Fragment>
    )
}

export default RootLayout
