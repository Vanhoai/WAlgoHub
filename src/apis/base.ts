export interface BaseResponse<T> {
    statusCode: number
    message: string
    data: T | null
}

export interface Meta {
    page: number
    pageSize: number
    totalPage: number
    totalRecord: number
}

export interface PaginationResponse<T> {
    statusCode: number
    message: string
    meta: Meta
    data: T[]
}
