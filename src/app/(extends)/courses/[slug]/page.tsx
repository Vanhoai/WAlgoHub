"use client"

import * as React from "react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    CircularProgress,
    SidebarProvider,
    SidebarSvg,
    useSidebar,
} from "@/components"
import { CourseSidebar } from "../components/sidebar"
import Image from "next/image"

const styles = {
    "--sidebar-width": "20rem",
    "--sidebar-width-mobile": "20rem",
} as React.CSSProperties

const CoursePage: React.FC = () => {
    return (
        <SidebarProvider style={styles}>
            <Wrapper>Course Page</Wrapper>
        </SidebarProvider>
    )
}

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { toggleSidebar } = useSidebar()

    return (
        <React.Fragment>
            <CourseSidebar />
            <div className="flex flex-1 w-full flex-col">
                <div className="flex flex-row items-center h-20 px-5 border-b-1">
                    <Image
                        src={SidebarSvg}
                        alt="Sidebar Icon"
                        className="cursor-pointer"
                        onClick={() => toggleSidebar()}
                    />
                    <div className="h-5 w-[1px] bg-gray-300 mx-3" />
                    <CircularProgress percentage={48} size={32} strokeWidth={2} />
                    <p className="text-[16px] me-5 ms-2">4/26 lessons</p>
                    <div className="flex-1" />
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex flex-1 flex-col p-5">{children}</div>
            </div>
        </React.Fragment>
    )
}

export default CoursePage
