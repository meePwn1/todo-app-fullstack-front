// export type TaskResponse2 = {
// 	id: string
// 	createdAt: Date
// 	updatedAt: Date
// 	title: string
// 	description: string
// 	status: number
// 	priority: number
// 	startDate: Date
// 	deadline: Date
// 	completed: boolean
// 	order: number
// 	todoId: string
// }
export type TaskQueryParams = {
	/**
	 @min 1
	 @max 100
	 */
	count?: number
	page?: number
}

export type CreateTaskPayload = { todoId: string; title: string }
export type UpdateTaskPayload = {
	id: string
	todoId: string
	payload: Partial<Omit<Task, 'id' | 'todoListId' | 'addedDate' | 'order'>>
}

export type Task = {
	description: string
	title: string
	status: number
	priority: number
	startDate: Date
	deadline: Date
	id: string
	todoListId: string
	order: number
	addedDate: Date
}

export type TaskResponse = {
	items: Task[]
	totalCount: number
	error: string
}
