import { useTasks } from '@/services/tasks/tasks.hooks'
import { Task } from './task'

type Props = {
	todoId: string
}
export const Tasks = ({ todoId }: Props) => {
	const { data, isLoading } = useTasks(todoId)
	const tasks = data?.data.items

	if (isLoading) return <div>Loading...</div>

	if (!tasks?.length) return <div className='text-center text-gray-400 text-sm'>No tasks available. </div>
	const sortedTasks = tasks.slice().sort((a, b) => (a.status === 2 ? 1 : -1))
	return sortedTasks?.map(task => {
		return <Task task={task} key={task.id} todoId={todoId} />
	})
}
