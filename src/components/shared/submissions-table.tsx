"use client"

import * as React from "react"
import Image from "next/image"
import { CheckSvg, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components"

interface ProblemRow {
    id: string
    status: boolean
    title: string
    tags: string[]
    level: number
    acceptance: number
}

const problems: ProblemRow[] = [
    {
        id: "#123",
        status: true,
        title: "Two Sum",
        tags: ["array", "hash table"],
        level: 1,
        acceptance: 99.99,
    },
    {
        id: "#21",
        status: false,
        title: "Reverse Linked List",
        tags: ["linked list", "recursion"],
        level: 2,
        acceptance: 99.99,
    },
    {
        id: "#3123",
        status: false,
        title: "Merge Two Sorted Lists",
        tags: ["linked list"],
        level: 2,
        acceptance: 99.99,
    },
    {
        id: "#41",
        status: false,
        title: "Longest Substring Without Repeating Characters",
        tags: ["string", "sliding window"],
        level: 2,
        acceptance: 99.99,
    },
    {
        id: "#532",
        status: false,
        title: "Valid Parentheses",
        tags: ["string", "stack"],
        level: 2,
        acceptance: 99.99,
    },
    {
        id: "#6",
        status: false,
        title: "Implement strStr()",
        tags: ["string", "two pointers"],
        level: 3,
        acceptance: 99.99,
    },
    {
        id: "#7123",
        status: false,
        title: "Remove Duplicates from Sorted Array",
        tags: ["array", "two pointers"],
        level: 4,
        acceptance: 99.99,
    },
    {
        id: "#812",
        status: false,
        title: "Two Sum",
        tags: ["array", "hash table"],
        level: 2,
        acceptance: 99.99,
    },
    {
        id: "#912",
        status: false,
        title: "Longest Substring Without Repeating Characters",
        tags: ["string", "sliding window"],
        level: 2,
        acceptance: 99.99,
    },
]

const Level: React.FC<{ level: number }> = ({ level }) => {
    switch (level) {
        case 1:
            return (
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
                    Beginner
                </span>
            )
        case 2:
            return (
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                    Easy
                </span>
            )
        case 3:
            return (
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
                    Medium
                </span>
            )
        default:
            return (
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
                    Hard
                </span>
            )
    }
}

export const SubmissionsTable: React.FC = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Acceptance</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {problems.map((problem) => (
                    <TableRow key={problem.id} className="cursor-pointer">
                        <TableCell className="w-20">{problem.id}</TableCell>
                        <TableCell>{problem.status && <Image src={CheckSvg} alt="Check Box" />}</TableCell>
                        <TableCell>{problem.title}</TableCell>
                        <TableCell>
                            <Level level={problem.level} />
                        </TableCell>
                        <TableCell className="w-14">{problem.acceptance}%</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
