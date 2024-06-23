export type TaskResponse = {
	id: string
	createdAt: Date
	updatedAt: Date
	title: string
	description: string
	status: number
	priority: number
	startDate: Date
	deadline: Date
	completed: boolean
	order: number
	todoId: string
}

export type CreateTaskPayload = { todoId: string; title: string }
export type UpdateTaskPayload = { id: string; todoId: string; payload: Partial<TaskResponse> }
