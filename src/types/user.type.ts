import { StatusEnum } from "./status.type"

export enum RegisterMethod {
    DIRECT = '직접등록',
    PERSONAL = '사람인'
}

export interface UserType {
    userId: string
    userName: string
    registerMethod: RegisterMethod
    registerDate: string
    userEmail: string
    userPhone: string
    currentStatus: StatusEnum
}
