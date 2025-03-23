"use client"

import { Button, GraphComponent, LightSvg, MainLayout } from "@/components"
import Image from "next/image"
import * as React from "react"
import { Lilita_One } from "next/font/google"

const lilita = Lilita_One({ subsets: ["latin"], weight: "400" })

const Home: React.FC = () => {
    return (
        <MainLayout>
            <main className="flex flex-row h-[85vh] items-center overflow-visible">
                <div className="flex flex-1 flex-col relative h-full overflow-visible justify-center">
                    <div className="absolute -z-20 top-0 bottom-0 left-0 right-0 w-[300px] h-[300px] rounded-[20px] bg-[#A2D96E] opacity-50 translate-x-[30%] translate-y-[50%]" />
                    <div className="absolute -z-10 top-0 bottom-0 left-0 right-0 backdrop-blur-3xl"></div>

                    <div className="flex flex-row items-center gap-2">
                        <h1 className={`text-[60px] text-[#A2D96E] ${lilita.className}`}>M & A</h1>
                        <Image src={LightSvg} alt="Light" />
                    </div>
                    <p className="text-[16px] mb-4">
                        Xin chào các bạn đã đến với M&A, đây là nền tảng mình tạo ra để chia sẻ kiến thức về Học máy,
                        Cấu trúc dữ liệu & Thuật toán và Toán học. Với mong muốn tạo ra cộng đồng học tập và phát triển
                        IT ở Việt Nam, mình mong có thể một phần nào giúp các bạn tự tin hơn trong việc học tập và làm
                        việc hay đơn giản chỉ là theo đuổi đam mê của mình.
                    </p>
                    <p className="text-[16px] mb-4">
                        Mình luôn mong các bạn có thể cùng chia sẽ và đóng góp để cộng đồng ngày một phát triển hơn.
                    </p>

                    <div>
                        <Button className="px-8 cursor-pointer">Khám phá</Button>
                    </div>
                </div>
                <div className="flex flex-1 flex-col">
                    <GraphComponent width={500} height={500} />
                    <div className="flex flex-row justify-center gap-3">
                        <Button className="px-7 cursor-pointer">DFS</Button>
                        <Button className="px-7 cursor-pointer">BFS</Button>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}

export default Home
