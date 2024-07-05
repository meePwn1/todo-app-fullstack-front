export type UserResponse<T = { id: string; email: string; login: string }> = {
	data: T
	resultCode: number
	messages: string[]
}

export type LoginRequest = {
	email: string
	password: string
	rememberMe?: boolean
	captcha?: boolean
}
