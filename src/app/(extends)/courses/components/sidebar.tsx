import * as React from "react"
import {
    Certificate,
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
    SidebarProvider,
} from "@/components"
import Image from "next/image"

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

interface CircularProgressProps extends React.SVGProps<SVGSVGElement> {
    percentage: number
    size?: number
    strokeWidth?: number
}

const CircularProgress: React.FC<CircularProgressProps> = ({
    percentage,
    size = 60,
    strokeWidth = 2,
    className,
    ...props
}) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const progress = (percentage / 100) * circumference

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className={`w-full h-full ${className}`}
            {...props}
        >
            <circle cx={size / 2} cy={size / 2} r={radius} stroke="#ddd" strokeWidth={strokeWidth} fill="none" />
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#4caf50"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress}
                strokeLinecap="round"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
        </svg>
    )
}

export const CourseSidebar: React.FC = () => {
    return (
        <SidebarProvider
            style={{
                "--sidebar-width": "20rem",
                "--sidebar-width-mobile": "20rem",
            }}
        >
            <Sidebar>
                <SidebarHeader />
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
                                                            <CircularProgress
                                                                percentage={0}
                                                                size={30}
                                                                strokeWidth={2}
                                                            />
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
                                        <Image src={Certificate} alt="Certificate" />
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
        </SidebarProvider>
    )
}
