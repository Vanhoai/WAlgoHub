"use client"

import { Button, MainLayout } from "@/components"
import { firebaseApp } from "@/core"
import { useAccountStore } from "@/store"
import { getAuth } from "firebase/auth"
import { useRouter } from "next/navigation"
import * as React from "react"

const Home: React.FC = () => {
    const router = useRouter()
    const { updateAccount } = useAccountStore()
    const auth = getAuth(firebaseApp)

    const handleSignOut = async () => {
        await auth.signOut()
        updateAccount(null)

        router.push("/oauth")
    }

    return (
        <MainLayout>
            <div>
                <Button onClick={() => handleSignOut()}>Logout</Button>
            </div>
        </MainLayout>
    )
}

export default Home
