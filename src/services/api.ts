import axios from 'axios'

// export const api = axios.create({
// 	baseURL: process.env.NEXT_PUBLIC_API_URL,
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// })

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_TODO_APP_URL,
	headers: {
		'API-KEY': '90ee9bc0-e96b-4a8d-a427-fa62375019aa',
	},
	withCredentials: true,
})
