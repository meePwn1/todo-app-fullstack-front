import { api } from '../api'
import { CreateTaskPayload, TaskResponse, UpdateTaskPayload } from './tasks.types'

export class TasksService {
	private static TASKS = '/tasks'
	private static TODOS = '/todos'

	static async getTasks(todoId: string) {
		return api.get<TaskResponse[]>(`${this.TODOS}/${todoId}${this.TASKS}`).then(res => res.data)
	}

	static async createTask({ title, todoId }: CreateTaskPayload) {
		return api.post<CreateTaskPayload, TaskResponse>(`${this.TODOS}/${todoId}${this.TASKS}`, { title })
	}

	static async updateTask({ id, todoId, payload }: UpdateTaskPayload) {
		return api.put<UpdateTaskPayload, TaskResponse>(`${this.TODOS}/${todoId}${this.TASKS}/${id}`, payload)
	}

	static async deleteTask({ id, todoId }: { id: string; todoId: string }) {
		return api.delete(`${this.TODOS}/${todoId}${this.TASKS}/${id}`)
	}
}
