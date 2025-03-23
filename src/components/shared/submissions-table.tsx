"use client"

import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components"

interface SubmissionRow {
    when: string
    title: string
    status: number
    language: string
    memory: number
    time: number
}

const submissions: SubmissionRow[] = [
    {
        when: new Date().toISOString(),
        title: "Two Sum",
        status: 1,
        language: "C++",
        memory: 12345,
        time: 67890,
    },
    {
        when: new Date().toISOString(),
        title: "Find Minimum in Rotated Sorted Array",
        status: 1,
        language: "C++",
        memory: 12345,
        time: 67890,
    },
    {
        when: new Date().toISOString(),
        title: "Merge Two Sorted Lists",
        status: 2,
        language: "C++",
        memory: 12345,
        time: 67890,
    },
    {
        when: new Date().toISOString(),
        title: "Build Binary Search Tree from Preorder Traversal",
        status: 3,
        language: "C++",
        memory: 12345,
        time: 67890,
    },
    {
        when: new Date().toISOString(),
        title: "Find All Numbers Disappeared in an Array",
        status: 4,
        language: "C++",
        memory: 12345,
        time: 67890,
    },
    {
        when: new Date().toISOString(),
        title: "Find All Duplicates in an Array",
        status: 1,
        language: "C++",
        memory: 12345,
        time: 67890,
    },
    {
        when: new Date().toISOString(),
        title: "Find All Duplicates in an Array",
        status: 1,
        language: "C++",
        memory: 12345,
        time: 67890,
    },
    {
        when: new Date().toISOString(),
        title: "Find All Duplicates in an Array",
        status: 2,
        language: "C++",
        memory: 12345,
        time: 67890,
    },
    {
        when: new Date().toISOString(),
        title: "Find All Duplicates in an Array",
        status: 1,
        language: "C++",
        memory: 12345,
        time: 67890,
    },
    {
        when: new Date().toISOString(),
        title: "Find All Duplicates in an Array",
        status: 4,
        language: "C++",
        memory: 12345,
        time: 67890,
    },
]

const Status: React.FC<{ status: number }> = ({ status }) => {
    switch (status) {
        case 1:
            return (
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                    Accepted
                </span>
            )
        case 2:
            return (
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
                    Spending
                </span>
            )
        default:
            return (
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
                    Time Limit Exceeded
                </span>
            )
    }
}

export const SubmissionsTable: React.FC = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>When</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Language</TableHead>
                    <TableHead>Memory</TableHead>
                    <TableHead>Time</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {submissions.map((submission, index) => (
                    <TableRow key={index} className="cursor-pointer">
                        <TableCell>{submission.when}</TableCell>
                        <TableCell>{submission.title}</TableCell>
                        <TableCell>
                            <Status status={submission.status} />
                        </TableCell>
                        <TableCell>{submission.language}</TableCell>
                        <TableCell>{submission.memory}MB</TableCell>
                        <TableCell>{submission.time}MS</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
