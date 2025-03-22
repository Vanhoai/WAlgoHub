"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { getAuth } from "firebase/auth"
import { firebaseApp } from "@/core"
import { useAccountStore } from "@/store"
import { Avatar, AvatarFallback, AvatarImage } from "@/components"

import { AppNavigation } from "../shared/navigation"
import { DropdownAvatar } from "../shared/dropdown-avatar"
import Link from "next/link"

const Header: React.FC = () => {
    const router = useRouter()
    const auth = getAuth(firebaseApp)
    const accountStore = useAccountStore()

    const handleLogout = async () => {
        await auth.signOut()
        accountStore.updateAccount(null)
        router.push("/oauth")
    }

    return (
        <div className="container w-full mx-auto h-20 flex flex-row items-center">
            <Link href="/">
                <h1 className="text-2xl font-black me-9 flex-none">M&A 🇻🇳</h1>
            </Link>
            <div className="flex-1">
                <AppNavigation />
            </div>

            <DropdownAvatar onSignOut={handleLogout}>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownAvatar>
        </div>
    )
}

export default Header
