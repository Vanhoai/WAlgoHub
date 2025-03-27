"use client"

import * as React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Checkbox,
    Input,
    ShareBreadcrumb,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function SelectSorted() {
    return (
        <Select defaultValue="best_math">
            <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select Sort" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="best_math">Best Match</SelectItem>
                    <SelectItem value="latest">Latest</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

const tags = ["Graph", "Tree", "Dynamic Programming", "Greedy", "Sorting", "Searching", "Recursion"]
const image = "https://i.pinimg.com/736x/bb/e8/e3/bbe8e3c11878debd30f10392bf885834.jpg"

const ExplorePage: React.FC = () => {
    const router = useRouter()

    return (
        <div className="flex flex-col">
            <ShareBreadcrumb />

            <div className="flex flex-row gap-3">
                <div>
                    <Card className="w-64">
                        <CardHeader>
                            <CardTitle>Filter By</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3">
                            {tags.map((tag) => (
                                <div key={tag} className="flex flex-row items-center gap-2">
                                    <Checkbox id={tag} />
                                    <label htmlFor={tag} className="text-sm mt-1">
                                        {tag}
                                    </label>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-1 flex-col">
                    <div className="flex flex-row justify-between">
                        <Input type="text" placeholder="Find the knowledge you want" className="w-2/5" />
                        <SelectSorted />
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-2">
                        {Array.from({ length: 9 }).map((_, i) => {
                            return (
                                <Card key={i} className="p-2" onClick={() => router.push("/explore/12371")}>
                                    <CardContent className="p-0 cursor-pointer">
                                        <Image
                                            src={image}
                                            alt="Image"
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            objectFit="cover"
                                            className="w-full h-[140px]"
                                        />

                                        <div className="flex flex-row items-center my-2 gap-2">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <span>tvhoai.adv</span>
                                        </div>
                                        <p className="text-sm line-clamp-3 text-gray-500">
                                            <strong className="text-black">Skills you’ll gain:</strong>  Machine
                                            Learning Specialization. Master fundamental AI concepts and develop
                                            practical machine...
                                        </p>
                                        <div className="flex flex-row justify-between mt-1">
                                            <p>40 exercises</p>
                                            <p>120 mins read</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExplorePage
