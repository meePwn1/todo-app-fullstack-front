import { useTasks } from '@/services/tasks/tasks.hooks'
import { Task } from './task'

type Props = {
	todoId: string
}
export const Tasks = ({ todoId }: Props) => {
	const { data: tasks, isLoading } = useTasks(todoId)

	if (isLoading) return <div>Loading...</div>

	if (!tasks?.length) return <div className='text-center text-gray-400 text-sm'>No tasks available. </div>
	console.log('Tasks before sorting:', tasks)
	const sortedTasks = tasks.slice().sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1))
	console.log('Tasks after sorting:', sortedTasks)
	return sortedTasks?.map(task => {
		return <Task task={task} key={task.id} todoId={todoId} />
	})
}
