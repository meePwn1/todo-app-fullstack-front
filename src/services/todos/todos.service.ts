import { api } from '../api'
import { CreateTodoPayload, Todo, UpdateTodoPayload } from './todos.types'

class TodosService {
	private static TODOS_ENDPOINT = '/todo-lists'

	static getTodos() {
		return api.get<Todo[]>(this.TODOS_ENDPOINT).then(res => res.data)
	}

	static createTodo(payload: CreateTodoPayload) {
		return api.post<Todo>(this.TODOS_ENDPOINT, payload)
	}

	static updateTodo({ id, payload }: UpdateTodoPayload) {
		return api.put<UpdateTodoPayload, Todo>(`${this.TODOS_ENDPOINT}/${id}`, payload)
	}

	static deleteTodo(id: string) {
		return api.delete(`${this.TODOS_ENDPOINT}/${id}`)
	}
}

export default TodosService
