import { SidebarProvider, SidebarTrigger } from "@/components"
import * as React from "react"
import { CourseSidebar } from "../components/sidebar"

const CoursePage: React.FC = () => {
    return (
        <SidebarProvider>
            <CourseSidebar />
            <div>
                <SidebarTrigger />
                <div>Course Page</div>
            </div>
        </SidebarProvider>
    )
}

export default CoursePage
