export type Todo = {
	id: string
	title: string
	createdAt: string
	updatedAt: string
	order: number
}
export type CreateTodoPayload = {
	title: string
}

export type UpdateTodoPayload = { id: string; payload: Partial<Todo> }
