interface LoginRequest {
    email: string;
    password: string
}

interface LoginData {
    accessToken: string;
}

export type {
    LoginRequest, LoginData
};