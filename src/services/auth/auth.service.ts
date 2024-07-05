import { api } from '../api'
import { LoginRequest, UserResponse } from './auth.types'

class AuthService {
	private static AUTH_ENDPOINT = '/auth'

	static async me() {
		return api.get<UserResponse>(`${this.AUTH_ENDPOINT}`)
	}
	static async login(data: LoginRequest) {
		return api.post<LoginRequest, UserResponse<{ userId: string }>>(`${this.AUTH_ENDPOINT}/login`, data)
	}
	static async logout() {
		return api.delete<UserResponse<{}>>(`${this.AUTH_ENDPOINT}/logout`)
	}
}

export default AuthService
