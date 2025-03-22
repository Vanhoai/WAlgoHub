import * as React from "react"

import { Edge, Graph, GraphSimulation } from "../canvas/draw"

interface GraphComponentProps {
    width: number
    height: number
}

const edges = [
    new Edge(1, 2),
    new Edge(1, 3),
    new Edge(1, 7),
    new Edge(2, 3),
    new Edge(2, 4),
    new Edge(3, 4),
    new Edge(5, 6),
    new Edge(6, 7),
]
const graph = new Graph(7, edges)

const simulation = React.createRef<GraphSimulation>()
export const GraphComponent: React.FC<GraphComponentProps> = ({ width, height }) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    React.useEffect(() => {
        if (canvasRef.current === null) return
        simulation.current = new GraphSimulation(graph, canvasRef.current)
        if (simulation.current !== null) simulation.current.draw()
    }, [width, height])

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
            }}
        >
            <canvas ref={canvasRef} width={width} height={height} />
        </div>
    )
}
