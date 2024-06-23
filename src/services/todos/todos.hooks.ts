import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import TodosService from './todos.service'
import { CreateTodoPayload, UpdateTodoPayload } from './todos.types'

export const useTodos = () => {
	return useQuery({ queryKey: ['todos'], queryFn: () => TodosService.getTodos() })
}

export const useCreateTodo = () => {
	const queryClient = useQueryClient()
	const { mutate: createTodo, isPending } = useMutation({
		mutationKey: ['createTodo'],
		mutationFn: (payload: CreateTodoPayload) => TodosService.createTodo(payload),
		onSuccess() {
			toast.success('List successfully created')
			queryClient.invalidateQueries({ queryKey: ['todos'] })
		},
	})
	return { createTodo, isPending }
}

export const useUpdateTodo = () => {
	const queryClient = useQueryClient()
	const { mutate: updateTodo, isPending } = useMutation({
		mutationKey: ['updateTodo'],
		mutationFn: ({ id, payload }: UpdateTodoPayload) => TodosService.updateTodo({ id, payload }),
		onSuccess() {
			toast.success('List name updated')
			queryClient.invalidateQueries({ queryKey: ['todos'] })
		},
	})
	return { updateTodo, isPending }
}

export const useDeleteTodo = () => {
	const queryClient = useQueryClient()
	const { mutate: deleteTodo, isPending } = useMutation({
		mutationKey: ['deleteTodo'],
		mutationFn: (id: string) => TodosService.deleteTodo(id),
		onSuccess() {
			toast.success('List successfully deleted')
			queryClient.invalidateQueries({ queryKey: ['todos'] })
		},
	})
	return { deleteTodo, isPending }
}
