import { AccountEntity } from "@/core"
import { BaseResponse } from "./base"

interface OAuthReq {
    idToken: string
    deviceToken: string
}

interface AuthApi {
    oauth(req: OAuthReq): Promise<BaseResponse<AccountEntity>>
}

export const authApi: AuthApi = {
    async oauth(req: OAuthReq): Promise<BaseResponse<AccountEntity>> {
        const { idToken, deviceToken } = req
        const response = await fetch("http://127.0.0.1:8000/api/v1/auth/oauth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ idToken, deviceToken }),
        })
        const data = await response.json()
        return data
    },
}
