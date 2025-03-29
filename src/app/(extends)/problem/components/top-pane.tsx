import * as React from "react"
import { Playground } from "./playground"

const TopPane: React.FC = () => {
    return (
        <div className="w-full h-full flex">
            <Playground />
        </div>
    )
}

export default TopPane
