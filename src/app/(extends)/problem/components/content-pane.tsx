import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components"

const DescriptionTab = () => {
    return (
        <TabsContent value="description" className="flex-1">
            <h2 className="text-xl font-bold text-center mb-3">Count Island</h2>
            <p className="text-[16px]">
                KazaQ has a knapsack with volume 2⋅n and n kinds of food, where the i-th food's volume is i and the
                number of it is ai (1≤i≤n) meaning that the number of the i-th food that KazaQ would like to store into
                the knapsack is no more than ai, otherwise he would feel sick. KazaQ has a unique taste, therefore all
                the ai are distinct. <br />
                KazaQ plans to make a journey but after that he needs to store some food and one piece of equipment into
                the knapsack. He has m pieces of equipment, of which the i-th piece's volume is bi (1≤i≤n). Notice that
                volumes of different pieces may be the same. Assuming that two plans are distinct if and only if they
                contain different pieces of equipment or there exists at least one integer k (1≤k≤n) satisfying the
                number of the k-th food to store into the knapsack in this two plans are different, KazaQ is intend to
                know what is the total number of distinct plans for storing one piece of equipment and some food into
                the knapsack fully. Can you help him? <br />
                The answer may be very large, so you only need to give the value of the answer modulo 109+7.
            </p>

            <h2 className="text-lg font-bold mt-6">Input</h2>
            <p className="text-[16px]">
                {`The input contains multiple test cases. For each test case: The first line contains two positive integers n and m, satisfying 1≤n≤5⋅104,1≤m≤2⋅n. The second line contains n distinct non-negative integers a1,a2,⋯,an, satisfying 0≤a1<a2<⋯<an≤2⋅n. The third line contains m positive integers b1,b2,⋯,bm, satisfying 1≤b1,b2,⋯,bm≤2⋅n. About 100 test cases in total, where no more than 5 cases satisfy n≥103.`}
            </p>

            <h2 className="text-lg font-bold mt-6">Output</h2>
            <p className="text-[16px]">
                {`For each test case, output "Case #x: y" in one line (without quotes), where x indicates the case number starting from 1 and y denotes the answer of corresponding case.`}
            </p>

            <div className="flex flex-row gap-5 mt-8">
                <div className="flex flex-1 flex-col">
                    <h2 className="font-bold text-lg mb-2">Sample Input</h2>
                    <Card className="flex-1">
                        <CardContent>
                            1 1 <br />
                            1 1 <br />
                            2 2 <br />
                            1 2 <br />
                            3 4 <br />
                            3 3 <br />
                            1 2 <br />
                            3 2 <br />
                            3 3 <br />
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-1 flex-col">
                    <h2 className="font-bold text-lg mb-2">Sample Input</h2>
                    <Card className="flex-1">
                        <CardContent>
                            Case #1: 1 <br />
                            Case #2: 2 <br />
                            Case #3: 6 <br />
                            Case #4: 1 <br />
                            Case #5: 2 <br />
                            Case #6: 6 <br />
                        </CardContent>
                    </Card>
                </div>
            </div>

            <h2 className="text-lg font-bold mt-6">Note</h2>
            <p className="text-[16px]">
                {`In the first test case, there is only one permutation with length 𝑛=1n=1 that is 𝑝=[1]p=[1], which is not perfect In the second test case, one possible perfect permutation with length 𝑛=4n=4 is 𝑝=[2,4,1,3]p=[2,4,1,3] In the third test case, one possible perfect permutation with length 𝑛=5n=5 is 𝑝=[5,1,4,3,2]p=[5,1,4,3,2]`}
            </p>
        </TabsContent>
    )
}

const SubmissionsTab = () => {
    return <TabsContent value="submissions">Submissions</TabsContent>
}

const ContentPane: React.FC = () => {
    return (
        <div className="flex-1">
            <Tabs defaultValue="description" className="flex flex-col h-full">
                <TabsList className="flex flex-row">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="submissions">Submissions</TabsTrigger>
                </TabsList>
                <Card className="flex flex-1 flex-col overflow-y-scroll no-scrollbar">
                    <CardContent className="space-y-2 flex-1">
                        <DescriptionTab />
                        <SubmissionsTab />
                    </CardContent>
                </Card>
            </Tabs>
        </div>
    )
}

export default ContentPane
