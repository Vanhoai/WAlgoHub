export interface AccountEntity {
    id: string
    username: string
    email: string
    avatar: string
    deviceToken: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
}
