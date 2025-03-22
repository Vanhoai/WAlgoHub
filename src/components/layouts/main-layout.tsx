import * as React from "react"
import Header from "./header"
import Footer from "./footer"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="w-full">
            <Header />
            <div className="container mx-auto">{children}</div>
            <Footer />
        </div>
    )
}

export default MainLayout
