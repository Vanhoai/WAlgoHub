import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components"
import * as React from "react"

const BottomPane: React.FC = () => {
    return (
        <div className="border rounded-[8px] w-full h-full p-3">
            <Tabs defaultValue="case_1" className="flex flex-col h-full">
                <TabsList className="flex flex-row">
                    {[1, 2, 3, 4, 5].map((k) => {
                        return (
                            <TabsTrigger key={k} value={`case_${k}`}>
                                Case {k}
                            </TabsTrigger>
                        )
                    })}
                </TabsList>
                {[1, 2, 3, 4, 5].map((k) => {
                    return (
                        <TabsContent key={k} value={`case_${k}`}>
                            Submissions
                        </TabsContent>
                    )
                })}
            </Tabs>
        </div>
    )
}

export default BottomPane
