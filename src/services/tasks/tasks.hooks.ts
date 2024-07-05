import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { TasksService } from './tasks.service'
import { CreateTaskPayload, UpdateTaskPayload } from './tasks.types'

export const useTasks = (todoId: string) => {
	return useQuery({ queryKey: ['tasks', todoId], queryFn: () => TasksService.getTasks(todoId) })
}

export const useCreateTask = () => {
	const queryClient = useQueryClient()
	const { mutate: createTask, isPending } = useMutation({
		mutationKey: ['createTask'],
		mutationFn: ({ title, todoId }: CreateTaskPayload) => TasksService.createTask({ title, todoId }),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['tasks'] })
		},
	})
	return { createTask, isPending }
}

export const useUpdateTask = () => {
	const queryClient = useQueryClient()

	const { mutate: updateTask, isPending } = useMutation({
		mutationKey: ['updateTask'],
		mutationFn: ({ id, todoId, payload }: UpdateTaskPayload) => TasksService.updateTask({ id, todoId, payload }),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['tasks'] })
		},
	})
	return { updateTask, isPending }
}

export const useDeleteTask = () => {
	const queryClient = useQueryClient()
	const { mutate: deleteTask, isPending } = useMutation({
		mutationKey: ['deleteTask'],
		mutationFn: ({ id, todoId }: { id: string; todoId: string }) => TasksService.deleteTask({ id, todoId }),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['tasks'] })
		},
	})
	return { deleteTask, isPending }
}
