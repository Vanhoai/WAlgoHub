"use client"
import { SubmissionsTable } from "@/components"
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

function PaginationDemo() {
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

const SubmissionsPage: React.FC = () => {
    return (
        <div className="flex flex-col">
            <ShareBreadcrumb />

            <div className="flex flex-row gap-4">
                <div className="flex-1">
                    <SubmissionsTable />
                    <PaginationDemo />
                </div>
            </div>
        </div>
    )
}

export default SubmissionsPage
