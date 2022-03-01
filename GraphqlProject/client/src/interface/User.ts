export interface User {
    id: string,
    email: string
}

export interface UserData {
    getUser: Array<User>
}

export interface RegisterUserRequest {
    email: string
}