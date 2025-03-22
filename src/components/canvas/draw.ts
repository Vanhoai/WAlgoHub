class Edge {
    u: number
    v: number

    constructor(u: number, v: number) {
        this.u = u
        this.v = v
    }
}

class Node {
    value: number
    x: number
    y: number
    vx: number
    vy: number
    dragging: boolean

    constructor(value: number, x: number, y: number) {
        this.value = value
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 1.5
        this.vy = (Math.random() - 0.5) * 1.5
        this.dragging = false
    }
}

const NODE_SIZE = 60
const CANVAS_SIZE = 500
const PADDING = 100

class Graph {
    nodes: Node[]
    edges: Edge[]
    adjacency: Map<Node, Node[]>

    constructor(nodes: number, edges: Edge[]) {
        this.nodes = Array.from({ length: nodes + 1 }).map((_, index) => {
            return new Node(index, 0, 0)
        })

        for (let i = 1; i <= nodes; i++) {
            let x = 0
            let y = 0
            let validPosition = false

            while (!validPosition) {
                x = Math.random() * (CANVAS_SIZE - 2 * PADDING) + PADDING
                y = Math.random() * (CANVAS_SIZE - 2 * PADDING) + PADDING

                validPosition = this.nodes.every((node) => {
                    return Math.sqrt(Math.pow(node.x - x, 2) + Math.pow(node.y - y, 2)) > NODE_SIZE
                })
            }

            const node = new Node(i, x, y)
            this.nodes[i] = node
        }

        this.edges = edges
        this.adjacency = new Map<Node, Node[]>()
        for (let i = 1; i <= nodes; i++) this.adjacency.set(this.nodes[i], [])

        for (let i = 0; i < edges.length; i++) {
            const u = this.nodes[edges[i].u]
            const v = this.nodes[edges[i].v]

            this.adjacency.get(u)!.push(v)
            this.adjacency.get(v)!.push(u)
        }
    }
}

class GraphSimulation {
    graph: Graph
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D | null
    draggingNode: Node | null = null
    offsetX: number = 0
    offsetY: number = 0

    constructor(graph: Graph, canvas: HTMLCanvasElement) {
        this.graph = graph
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
        this.canvas.width = 1000
        this.canvas.height = 1000
        this.canvas.style.width = "500px"
        this.canvas.style.height = "500px"

        this.ctx!.scale(2, 2)

        requestAnimationFrame(() => this.update())
    }

    update() {
        this.moveNodes()
        this.draw()
        requestAnimationFrame(() => this.update())
    }

    moveNodes() {
        // node auto move if is dragging
        for (const node of this.graph.nodes) {
            if (!node || node.dragging) continue

            // update position with speed of node
            node.x += node.vx
            node.y += node.vy

            // check impact with line x of canvas
            if (node.x - NODE_SIZE / 2 < 20 || node.x + NODE_SIZE / 2 > CANVAS_SIZE - 20) {
                node.vx *= -1
            }

            // check impact with line y of canvas
            if (node.y - NODE_SIZE / 2 < 20 || node.y + NODE_SIZE / 2 > CANVAS_SIZE - 20) {
                node.vy *= -1
            }

            // check impact between nodes
            for (const other of this.graph.nodes) {
                if (node === other || !other) continue

                const dx = node.x - other.x
                const dy = node.y - other.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                const minDist = NODE_SIZE

                if (distance < minDist) {
                    const angle = Math.atan2(dy, dx)
                    const pushX = Math.cos(angle) * 2
                    const pushY = Math.sin(angle) * 2

                    node.vx += pushX * 0.1
                    node.vy += pushY * 0.1
                    other.vx -= pushX * 0.1
                    other.vy -= pushY * 0.1
                }
            }
        }
    }

    draw() {
        if (this.ctx === null) return
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        const edges = this.graph.edges
        for (let i = 0; i < edges.length; i++) {
            const edge = edges[i]
            const u = this.graph.nodes[edge.u]
            const v = this.graph.nodes[edge.v]

            this.ctx.beginPath()
            this.ctx.moveTo(u.x, u.y)
            this.ctx.lineTo(v.x, v.y)
            this.ctx.strokeStyle = "#EAEAEA"
            this.ctx.lineWidth = 1
            this.ctx.stroke()
        }

        for (let i = 1; i <= this.graph.nodes.length; i++) {
            const node = this.graph.nodes[i]
            if (!node) continue

            this.ctx.beginPath()
            this.ctx.arc(node.x, node.y, NODE_SIZE / 2, 0, 2 * Math.PI)
            this.ctx.fillStyle = "#FFFFFF"
            this.ctx.fill()
            this.ctx.strokeStyle = "#EAEAEA"
            this.ctx.lineWidth = 1
            this.ctx.stroke()

            this.ctx.fillStyle = "#EAEAEA"
            this.ctx.font = "normal 16px Palatino Linotype"
            this.ctx.textAlign = "center"
            this.ctx.textBaseline = "middle"
            this.ctx.fillText(node.value.toString(), node.x, node.y)
        }
    }
}

export { Graph, Edge, GraphSimulation, Node }
