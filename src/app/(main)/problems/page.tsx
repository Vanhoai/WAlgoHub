"use client"

import { Button, Card, CardContent, CardHeader, CardTitle, ProblemTable } from "@/components"
import { ShareBreadcrumb } from "@/components/shared/breadcrumb"
import * as React from "react"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useRouter } from "next/navigation"

export function PaginationDemo() {
    return (
        <Pagination className="flex flex-row justify-end mt-6">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

const tags = ["Graph", "Tree", "Dynamic Programming", "Greedy", "Sorting", "Searching", "Recursion"]

const ProblemsPage: React.FC = () => {
    const router = useRouter()

    const onPressAction = (id: string) => {
        router.push(`/problems/${id.slice(1)}`)
    }

    return (
        <div className="flex flex-col">
            <ShareBreadcrumb />

            <div className="flex flex-row gap-4">
                <div className="flex-1">
                    <ProblemTable onPressAction={onPressAction} />
                    <PaginationDemo />
                </div>
                <Card className="w-[260px]">
                    <CardHeader>
                        <CardTitle>Tags</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-row flex-wrap gap-3">
                        {tags.map((tag) => (
                            <Button className="h-7" key={tag} variant="outline">
                                {tag}
                            </Button>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default ProblemsPage
