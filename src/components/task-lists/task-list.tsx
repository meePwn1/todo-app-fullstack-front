import { useCreateTask } from '@/services/tasks/tasks.hooks'
import { useDeleteTodo, useUpdateTodo } from '@/services/todos/todos.hooks'
import { Todo } from '@/services/todos/todos.types'
import { AddItem } from '../add-item'
import { EditableTitle } from '../editable-title'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Separator } from '../ui/separator'
import { Tasks } from './tasks'

export const TaskList = ({ todo }: { todo: Todo }) => {
	const { deleteTodo, isPending: isDeletePending } = useDeleteTodo()
	const { updateTodo, isPending: isUpdatePending } = useUpdateTodo()
	const { createTask, isPending } = useCreateTask()
	return (
		<Card key={todo.id} className='mb'>
			<CardHeader>
				<div className='flex justify-center gap-2 items-center mb-4'>
					<EditableTitle
						title={todo.title}
						onDelete={() => deleteTodo(todo.id)}
						onSubmit={(title: string) => updateTodo({ id: todo.id, payload: { title } })}
						isDeleteLoading={isDeletePending}
						isUpdateLoading={isUpdatePending}
					/>
				</div>
				<AddItem
					label='Add task'
					placeholder='New task'
					onSubmit={({ title }: { title: string }) => createTask({ title, todoId: todo.id })}
				/>
			</CardHeader>
			<Separator />
			<CardContent className='pt-6'>
				<Tasks todoId={todo.id} />
			</CardContent>
		</Card>
	)
}
