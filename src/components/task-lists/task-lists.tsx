import { useTodos } from '@/services/todos/todos.hooks'
import { TaskList } from './task-list'

export const TaskLists = () => {
	const { data: todos, isLoading } = useTodos()

	if (isLoading) return <div>Loading...</div>

	if (!todos?.length) return <div className='text-center text-gray-400 text-lg'>No list available. </div>

	return (
		<>
			<h1 className='text-center text-2xl mb-6 font-bold'>Lists</h1>
			<div className='grid grid-cols-auto-fill gap-6 items-start'>
				{todos?.map(todo => (
					<TaskList key={todo.id} todo={todo} />
				))}
			</div>
		</>
	)
}
