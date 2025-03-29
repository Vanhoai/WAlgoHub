"use client"

import * as React from "react"
import Split from "@uiw/react-split"
import ContentPane from "../components/content-pane"
import TopPane from "../components/top-pane"
import BottomPane from "../components/bottom-pane"

const ProblemPage: React.FC = () => {
    return (
        <div className="flex flex-col h-[calc(100vh-80px)] p-3">
            <Split
                className="w-full flex flex-row border-none"
                renderBar={({ onMouseDown, ...props }) => {
                    return (
                        <div {...props} style={{ boxShadow: "none", background: "transparent" }}>
                            <div onMouseDown={onMouseDown} style={{ backgroundColor: "#FFFFFF", boxShadow: "none" }} />
                        </div>
                    )
                }}
            >
                <ContentPane />
                <Split
                    mode="vertical"
                    className="w-[45vw]"
                    renderBar={({ onMouseDown, ...props }) => {
                        return (
                            <div {...props} style={{ boxShadow: "none", background: "transparent" }}>
                                <div
                                    onMouseDown={onMouseDown}
                                    style={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}
                                />
                            </div>
                        )
                    }}
                >
                    <div className="h-2/3">
                        <TopPane />
                    </div>
                    <div className="h-1/3">
                        <BottomPane />
                    </div>
                </Split>
            </Split>
        </div>
    )
}

export default ProblemPage
