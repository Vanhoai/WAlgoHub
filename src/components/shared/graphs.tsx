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
    new Edge(3, 4),
    new Edge(5, 6),
    new Edge(6, 7),
]

const simulation = React.createRef<GraphSimulation>()
export const GraphComponent: React.FC<GraphComponentProps> = ({ width, height }) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    React.useEffect(() => {
        if (canvasRef.current === null) return
        const graph = new Graph(7, edges, width)

        simulation.current = new GraphSimulation(graph, canvasRef.current, width)
        if (simulation.current !== null) simulation.current.draw()
    }, [width, height])

    return <canvas ref={canvasRef} width={width} height={height} />
}
