"use client"

import Image from "next/image"
import * as React from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

import { Button, Card, CardContent, GithubSvg, GoogleSvg, GraphSvg, Input, TreeSvg } from "@/components"
import { getMessaging, getToken } from "firebase/messaging"
import { firebaseApp } from "@/core"
import { useRouter } from "next/navigation"
import { authApi } from "@/apis"
import { useAccountStore } from "@/store"

const provider = new GoogleAuthProvider()

const OAuthPage: React.FC = () => {
    const router = useRouter()
    const auth = getAuth(firebaseApp)
    const messaging = getMessaging(firebaseApp)
    const { updateAccount } = useAccountStore()

    const [deviceToken, setDeviceToken] = React.useState<string | null>(null)

    const authGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        const user = result.user
        const idToken = await user.getIdToken(true)

        if (!idToken || !deviceToken) return

        const req = { idToken, deviceToken }
        const response = await authApi.oauth(req)

        const account = response.data
        updateAccount(account)
        router.push("/")
    }

    React.useEffect(() => {
        const getDeviceToken = async () => {
            if (!messaging) return
            const deviceToken = await getToken(messaging, {
                vapidKey: process.env.VAPID_KEY,
            })

            setDeviceToken(deviceToken)
        }

        function requestPermission() {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    console.log("Notification permission granted.")
                    getDeviceToken()
                }
            })
        }

        requestPermission()
    }, [messaging])

    return (
        <div className="container mx-auto flex min-h-screen flex-col md:flex-row">
            <div className="flex flex-col items-start justify-center p-8 md:w-1/2">
                <h2>Hi 🤩</h2>
                <p>
                    Chào mừng bạn đã đến với mình, đây là nơi mà mình mà mình sẽ có gắng chia sẽ các kiến thức về thuật
                    toán và lập trình và một số phạm vi khác trong lĩnh vực CNTT cho mọi người với hy vọng sẽ giúp các
                    bạn tự tin hơn trên con đường học tập và phát triển, cũng để giúp mình luôn trao dồi thêm kiến thức
                    mới và nâng cao kỹ năng của mình.
                </p>
                <p>
                    Mình luôn welcome các bạn có tinh thần đóng góp và muốn cùng mình phát triền nền tảng này. Xin cảm
                    ơn các bạn.
                </p>

                <div className="w-full flex flex-row mt-8 justify-center">
                    <Image src={GraphSvg} alt="Graph" width={200} height={200} />
                    <div className="w-8" />
                    <Image src={TreeSvg} alt="Tree" width={200} height={200} />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-8 md:w-1/2">
                <Card className="w-full max-w-md">
                    <CardContent className="pt-6">
                        <h2 className="mb-8 text-center text-2xl font-bold">M&A</h2>

                        <Button
                            type="button"
                            variant="outline"
                            className="flex w-full items-center justify-center gap-4 h-12 my-4 cursor-pointer"
                            onClick={() => authGoogle()}
                        >
                            <Image src={GoogleSvg} alt="Google Icon" />
                            <p className="text-[16px]">Tiếp tục với Google</p>
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            className="flex w-full items-center justify-center gap-4 h-12 my-4 cursor-pointer"
                            onClick={() => console.log("Google login clicked")}
                        >
                            <Image src={GithubSvg} alt="Google Icon" />
                            <p className="text-[16px]">Tiếp tục với Github</p>
                        </Button>

                        <div className="w-full h-[1px] bg-gray-200 mb-4" />

                        <form onSubmit={() => {}} className="space-y-6">
                            <Input
                                className="h-12 text-[16px]"
                                id="email"
                                type="email"
                                height={48}
                                placeholder="example@example.com"
                                required
                            />

                            <Button type="submit" className="w-full h-12 mb-4 cursor-pointer">
                                Tiếp tục
                            </Button>
                        </form>

                        <p>
                            {`By signing, you indicate that you have read, understood and agree to M&A's Terms of Service
                            and Privacy Policy`}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default OAuthPage
