import * as React from "react"

interface CircularProgressProps extends React.SVGProps<SVGSVGElement> {
    percentage: number
    size?: number
    strokeWidth?: number
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
    percentage,
    size = 60,
    strokeWidth = 2,
    className,
    ...props
}) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const progress = (percentage / 100) * circumference

    return (
        <div
            style={{
                width: size,
                height: size,
            }}
        >
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className={`w-full h-full ${className}`}
                {...props}
            >
                <circle cx={size / 2} cy={size / 2} r={radius} stroke="#ddd" strokeWidth={strokeWidth} fill="none" />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#4caf50"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - progress}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>
        </div>
    )
}
