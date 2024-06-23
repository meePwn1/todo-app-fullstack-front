import { cn } from '@/lib/utils'
import { useDeleteTask, useUpdateTask } from '@/services/tasks/tasks.hooks'
import { TaskResponse } from '@/services/tasks/tasks.types'
import { EditableTitle } from '../editable-title'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

type Props = {
	task: TaskResponse
	todoId: string
}

export const Task = ({ task, todoId }: Props) => {
	const { deleteTask, isPending: isDeleteLoading } = useDeleteTask()
	const { updateTask, isPending: isUpdateLoading } = useUpdateTask()
	return (
		<Label
			key={task.id}
			className={cn(
				'flex label items-center gap-2 mb-4 last:mb-0 h3:flex-[1_1_auto]',
				task.completed && 'label-completed'
			)}
		>
			<Checkbox
				id={String(task.id)}
				defaultChecked={task.completed}
				onCheckedChange={() => updateTask({ id: task.id, todoId, payload: { completed: !task.completed } })}
			/>
			<EditableTitle
				title={task.title}
				onDelete={() => deleteTask({ id: task.id, todoId })}
				isDeleteLoading={isDeleteLoading}
				isUpdateLoading={isUpdateLoading}
				onSubmit={(title: string) => updateTask({ id: task.id, todoId, payload: { title } })}
			/>
		</Label>
	)
}
