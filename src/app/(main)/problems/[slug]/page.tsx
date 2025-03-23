import { Button, Card, CardContent, CardHeader, CardTitle, Playground } from "@/components"
import { ShareBreadcrumb } from "@/components/shared/breadcrumb"
import * as React from "react"

const tags = ["Graph", "Tree", "Dynamic Programming"]

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

const ProblemPage: React.FC = () => {
    return (
        <div className="flex flex-col">
            <ShareBreadcrumb />
            <div className="flex flex-row gap-5">
                <div className="flex flex-col flex-1">
                    <h1 className="text-center text-2xl">Count Island</h1>
                    <h2 className="font-bold text-lg">Description</h2>
                    <p>
                        KazaQ has a knapsack with volume 2⋅n and n kinds of food, where the i-th food's volume is i and
                        the number of it is ai (1≤i≤n) meaning that the number of the i-th food that KazaQ would like to
                        store into the knapsack is no more than ai, otherwise he would feel sick. KazaQ has a unique
                        taste, therefore all the ai are distinct. KazaQ plans to make a journey but after that he needs
                        to store some food and one piece of equipment into the knapsack. He has m pieces of equipment,
                        of which the i-th piece's volume is bi (1≤i≤n). Notice that volumes of different pieces may be
                        the same. <br /> Assuming that two plans are distinct if and only if they contain different
                        pieces of equipment or there exists at least one integer k (1≤k≤n) satisfying the number of
                        the k-th food to store into the knapsack in this two plans are different, KazaQ is intend to
                        know what is the total number of distinct plans for storing one piece of equipment and some food
                        into the knapsack fully. Can you help him? The answer may be very large, so you only need to
                        give the value of the answer modulo 109+7.
                    </p>
                    <h2 className="font-bold text-lg mt-5">Input</h2>
                    <p>{`The input contains multiple test cases. For each test case: The first line contains two positive integers n and m, satisfying 1≤n≤5⋅104,1≤m≤2⋅n. The second line contains n distinct non-negative integers a1,a2,⋯,an, satisfying 0≤a1<a2<⋯<an≤2⋅n. The third line contains m positive integers b1,b2,⋯,bm, satisfying 1≤b1,b2,⋯,bm≤2⋅n. About 100 test cases in total, where no more than 5 cases satisfy n≥103.`}</p>
                    <h2 className="font-bold text-lg mt-5">Output</h2>
                    <p>
                        {`For each test case, output "Case #x: y" in one line (without quotes), where x indicates the case
                        number starting from 1 and y denotes the answer of corresponding case.`}
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
                    <h2 className="font-bold text-lg mt-5">Note</h2>
                    <p>
                        In the first test case, there is only one permutation with length 𝑛=1n=1 that is 𝑝=[1]p=[1],
                        which is not perfect In the second test case, one possible perfect permutation with
                        length 𝑛=4n=4 is 𝑝=[2,4,1,3]p=[2,4,1,3] In the third test case, one possible perfect permutation
                        with length 𝑛=5n=5 is 𝑝=[5,1,4,3,2]p=[5,1,4,3,2]
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    <Card className="w-[260px]">
                        <CardHeader>
                            <CardTitle>Thông tin vấn đề</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-row justify-between border-b mb-3">
                                <span>ID</span>
                                <span>99</span>
                            </div>
                            <div className="flex flex-row justify-between border-b mb-3">
                                <span>Time Limit</span>
                                <span>4000MS</span>
                            </div>
                            <div className="flex flex-row justify-between border-b mb-3">
                                <span>Memory Limit</span>
                                <span>4000MS</span>
                            </div>
                            <div className="flex flex-row justify-between border-b mb-3">
                                <span>Created By</span>
                                <span>hoaitv</span>
                            </div>
                            <div className="flex flex-row justify-between">
                                <span>Level</span>
                                <Level level={3} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-[260px]">
                        <CardHeader>
                            <CardTitle>Tags</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-row flex-wrap gap-3">
                            {tags.map((tag) => (
                                <Button className="h-7" key={tag} variant="outline">
                                    {tag}
                                </Button>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Playground />
        </div>
    )
}

export default ProblemPage
