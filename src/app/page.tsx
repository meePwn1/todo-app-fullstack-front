'use client'
import { AddItem } from '@/components/add-item'
import { TaskLists } from '@/components/task-lists/task-lists'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { useCreateTodo } from '@/services/todos/todos.hooks'

export default function Home() {
	const { createTodo, isPending } = useCreateTodo()

	return (
		<main className='flex flex-col min-h-screen  lg:p-24 p-6 pt-[40px_!important]'>
			<div className='flex items-center justify-center gap-6'>
				<AddItem label='Add list' placeholder='New list' onSubmit={createTodo} isLoading={isPending} />
				<ModeToggle />
			</div>
			<div className='pt-12'>
				<TaskLists />
			</div>
		</main>
	)
}
