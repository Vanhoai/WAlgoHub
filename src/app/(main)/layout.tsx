import * as React from "react"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <header>Header</header>
            {children}
            <footer>Footer</footer>
        </div>
    )
}

export default MainLayout
