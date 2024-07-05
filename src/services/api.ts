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
		'API-KEY': process.env.NEXT_PUBLIC_API_KEY,
	},
	withCredentials: true,
})
