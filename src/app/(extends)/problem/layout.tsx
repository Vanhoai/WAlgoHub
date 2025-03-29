"use client"

import {
    ArrowBackSvg,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
    DropdownAvatar,
    RunSvg,
    SubmitSvg,
} from "@/components"
import { firebaseApp } from "@/core"
import { useAccountStore } from "@/store"
import { getAuth } from "firebase/auth"
import Image from "next/image"
import { useRouter } from "next/navigation"
import * as React from "react"

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter()
    const firebaseAuth = getAuth(firebaseApp)
    const accountStore = useAccountStore()

    const handleLogout = async () => {
        if (!firebaseAuth) return
        await firebaseAuth.signOut()
        accountStore.updateAccount(null)
        router.push("/oauth")
    }

    return (
        <div className="flex flex-col">
            <header className="h-20 flex flex-row items-center px-5 relative justify-between border-b">
                <div className="absolute left-0 right-0 w-full flex flex-row justify-center gap-3">
                    <Button variant="outline" className="flex flex-row items-center cursor-pointer">
                        <span className="mt-1">Run</span>
                        <Image src={RunSvg} alt="Run Icon" />
                    </Button>
                    <Button
                        variant="secondary"
                        className="flex flex-row items-center cursor-pointer bg-[#F0FFEF] border-[#DDF0CB] border-[1px] hover:bg-[#F9FFF9]"
                    >
                        <span className="mt-1 text-[#5D8736]">Submit</span>
                        <Image src={SubmitSvg} alt="Submit Icon" />
                    </Button>
                </div>

                <div className="flex flex-row gap-4 cursor-pointer z-10" onClick={() => router.back()}>
                    <Image src={ArrowBackSvg} alt="Back Icon" />
                    <h4 className="text-lg mt-1">Problems</h4>
                </div>

                <DropdownAvatar onSignOut={handleLogout}>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownAvatar>
            </header>
            {children}
        </div>
    )
}

export default Layout
