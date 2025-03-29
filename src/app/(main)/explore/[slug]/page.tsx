"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    ShareBreadcrumb,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components"

const chapters = [
    {
        title: "Introduction",
        lessons: [
            {
                title: "What is Machine Learning?",
            },
            {
                title: "Why Machine Learning?",
            },
        ],
    },
    {
        title: "Basics of Machine Learning",
        lessons: [
            {
                title: "Linear Regression",
            },
            {
                title: "Logistic Regression",
            },
        ],
    },
    {
        title: "Supervised Learning",
        lessons: [
            {
                title: "Decision Trees",
            },
            {
                title: "Random Forest",
            },
        ],
    },
]

function CourseDescription() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {chapters.map((chapter, index) => {
                return (
                    <AccordionItem value={`item-${index}`} key={chapter.title}>
                        <AccordionTrigger>
                            <div className="flex flex-col">
                                <h2 className="text-lg">{chapter.title}</h2>
                                <span className="text-[16px] text-gray-400">{chapter.lessons.length} lessons</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-3">
                                {chapter.lessons.map((lesson, index) => {
                                    return (
                                        <div key={index} className="flex flex-row items-center gap-2">
                                            <span className="text-lg">{index + 1}.</span>
                                            <span className="text-lg">{lesson.title}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}

const CoursePage: React.FC = () => {
    const router = useRouter()
    const navigate = () => router.push("/courses/82731")

    return (
        <div className="flex flex-col">
            <ShareBreadcrumb />

            <div className="flex flex-row justify-between">
                <h1 className="text-lg">Toán cho Machine Learning</h1>
                <Button className="cursor-pointer" onClick={navigate}>
                    Start Learning
                </Button>
            </div>

            <Card className="my-5 flex flex-row p-4 items-center">
                <div className="flex-1 flex flex-row justify-center">
                    <p>10 bài học</p>
                </div>
                <div className="h-10 w-[1px] bg-gray-300" />
                <div className="flex-1 flex flex-row justify-center">
                    <p>100 bài tập</p>
                </div>
                <div className="h-10 w-[1px] bg-gray-300" />
                <div className="flex-1 flex flex-row justify-center">
                    <p>120 mins read</p>
                </div>
            </Card>

            <h1 className="text-lg mb-2">Kiến thức</h1>
            <p className="text-[16px]">
                Bắt đầu bằng cách tìm hiểu các kiến ​​thức cơ bản về ML trước khi khám phá sức mạnh của Apache Spark để
                xây dựng và triển khai các mô hình ML cho các ứng dụng kỹ thuật dữ liệu. Khám phá các kỹ thuật học có
                giám sát và không giám sát và khám phá những khả năng mang tính cách mạng của AI tạo sinh thông qua các
                bài đọc hướng dẫn và video.
            </p>

            <div className="flex flex-row mt-10 gap-3">
                <div className="flex flex-1">
                    <Card className="p-3 w-full">
                        <CardContent className="flex flex-col">
                            <CourseDescription />
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className="w-72 gap-3">
                        <CardHeader>
                            <CardTitle>Author</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-row items-center">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col ml-2">
                                <span>tvhoai.adv</span>
                                <span>24/12/2024</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CoursePage
