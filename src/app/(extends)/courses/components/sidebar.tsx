"use client"

import * as React from "react"
import {
    ArrowBackSvg,
    CertificateSvg,
    CircularProgress,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    DoneSvg,
    LockSvg,
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components"
import Image from "next/image"
import { useRouter } from "next/navigation"

// Menu items.
const lessons = [
    {
        title: "Linear Algebra",
        lessons: [
            {
                title: "Vector, không gian vector",
                isDone: true,
            },
            {
                title: "Ma trận và chéo hoá",
                isDone: false,
            },
            {
                title: "Bài tập giảm chiều dữ liệu",
                isDone: false,
            },
        ],
    },
    {
        title: "Calculus",
        lessons: [
            {
                title: "Đạo hàm",
                isDone: true,
            },
            {
                title: "Nguyên hàm",
                isDone: false,
            },
            {
                title: "Tích phân",
                isDone: false,
            },
        ],
    },
    {
        title: "Probability",
        lessons: [
            {
                title: "Xác suất",
                isDone: true,
            },
            {
                title: "Phân phối xác suất",
                isDone: false,
            },
            {
                title: "Hồi quy",
                isDone: false,
            },
        ],
    },
]

export const CourseSidebar: React.FC = () => {
    const router = useRouter()

    return (
        <Sidebar>
            <SidebarHeader
                className="flex flex-row items-center cursor-pointer px-4 py-5 gap-3"
                onClick={() => router.back()}
            >
                <Image src={ArrowBackSvg} alt="Back Icon" />
                <h2 className="text-lg mt-1">Math for Machine Learning</h2>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-lg">Lessons</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {lessons.map((lesson) => {
                                return (
                                    <Collapsible defaultOpen key={lesson.title} className="group/collapsible">
                                        <SidebarMenuItem>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton className="flex flex-row h-14 items-center cursor-pointer">
                                                    <div className="w-[32px] h-[32px]">
                                                        <CircularProgress percentage={0} size={32} strokeWidth={2} />
                                                    </div>
                                                    <span className="text-[17px] mt-2 ml-2">{lesson.title}</span>
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub className="flex flex-col gap-0 border-none px-0 mx-1">
                                                    {lesson.lessons.map((item, index) => {
                                                        return (
                                                            <SidebarMenuSubItem
                                                                key={item.title}
                                                                className="cursor-pointer py-2"
                                                            >
                                                                <SidebarMenuSubButton className="flex flex-row justify-between w-full px-2">
                                                                    <span className="text-[16px] line-clamp-1 flex-1">
                                                                        {index + 1}. {item.title}
                                                                    </span>
                                                                    <div>
                                                                        {item.isDone ? (
                                                                            <Image src={DoneSvg} alt="Done Icon" />
                                                                        ) : (
                                                                            <Image src={LockSvg} alt="Lock Icon" />
                                                                        )}
                                                                    </div>
                                                                </SidebarMenuSubButton>
                                                            </SidebarMenuSubItem>
                                                        )
                                                    })}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </SidebarMenuItem>
                                    </Collapsible>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-lg">Finished Course</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="flex flex-row h-14 items-center cursor-pointer">
                                    <Image src={CertificateSvg} alt="Certificate" />
                                    <span className="text-[17px] mt-2 ml-2 flex-1">Certificate</span>
                                    <Image src={LockSvg} alt="Lock Icon" />
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter />
        </Sidebar>
    )
}
