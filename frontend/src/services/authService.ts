import axios from "axios"
import appConfig from "../configs/app.config"

interface SignInType{
    username?: string,
    password?: string
}

interface SignUpType extends SignInType{
    email?: string
}
const BASE_URL = appConfig.apiPrefix;

export async function apiSignIn(data : SignInType) {
    const response = axios.post(`${BASE_URL}/user/signin`,data);
    console.log("response", response)
}

export async function apiSignUp(data: SignUpType) {
    const response = axios.post(`${BASE_URL}/user/signup`, data)
    console.log("response", response)
}