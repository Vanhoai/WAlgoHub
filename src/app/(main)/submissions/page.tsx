import { SubmissionsTable } from "@/components"
import { ShareBreadcrumb } from "@/components/shared/breadcrumb"
import * as React from "react"

const SubmissionsPage: React.FC = () => {
    return (
        <div className="flex flex-col">
            <ShareBreadcrumb />

            <div className="flex flex-row gap-4">
                <div className="flex-1">
                    <SubmissionsTable />
                </div>
            </div>
        </div>
    )
}

export default SubmissionsPage
