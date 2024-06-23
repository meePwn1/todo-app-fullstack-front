'use client'
import { cn } from '@/lib/utils'
import { Check, Pencil, Trash, X } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from './ui/button'
import { CardTitle } from './ui/card'
import { Input } from './ui/input'

type Props = {
	onDelete?: () => void
	onSubmit?: (title: string) => void
	title?: string
	isDeleteLoading?: boolean
	isUpdateLoading?: boolean
}

export const EditableTitle = ({ title, onDelete, onSubmit, isDeleteLoading, isUpdateLoading }: Props) => {
	const [inputValue, setInputValue] = useState(title || '')
	const [editMode, setEditMode] = useState(false)
	const [error, setError] = useState(false)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		error && setError(false)
		setInputValue(e.target.value)
	}
	const handleSubmitEdit = () => {
		if (!inputValue) {
			toast.error('Title is required')
			setError(true)
			return
		}
		onSubmit?.(inputValue)
		setEditMode(false)
	}
	const handleCancelEdit = () => {
		setInputValue(title || '')
		setEditMode(false)
	}

	return (
		<>
			{editMode ? (
				<Input value={inputValue} onChange={handleInputChange} className={cn('h-7', error && 'border-red-500')} />
			) : (
				<CardTitle>{title}</CardTitle>
			)}

			{editMode ? (
				<>
					<Button variant={'outline'} size={'icon'} onClick={handleSubmitEdit} className='flex-icon'>
						<Check size={'16'} />
					</Button>
					<Button variant={'outline'} size={'icon'} onClick={handleCancelEdit} className='flex-icon'>
						<X size={'16'} />
					</Button>
				</>
			) : (
				<>
					<Button
						variant={'outline'}
						size={'icon'}
						onClick={() => setEditMode(true)}
						className='flex-icon'
						disabled={isUpdateLoading}
					>
						<Pencil size={'16'} />
					</Button>
					<Button variant={'outline'} size={'icon'} className='flex-icon' onClick={onDelete} disabled={isDeleteLoading}>
						<Trash size={'16'} />
					</Button>
				</>
			)}
		</>
	)
}
