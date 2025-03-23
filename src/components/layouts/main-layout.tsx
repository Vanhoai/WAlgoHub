import * as React from "react"
import Header from "./header"
import Footer from "./footer"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="w-full overflow-visible">
            <Header />
            <div className="container mx-auto overflow-visible">{children}</div>
            <Footer />
        </div>
    )
}

export default MainLayout
