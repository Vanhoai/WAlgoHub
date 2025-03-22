import { MainLayout } from "@/components"
import * as React from "react"

interface MainLayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<MainLayoutProps> = ({ children }) => {
    return <MainLayout>{children}</MainLayout>
}

export default Layout
