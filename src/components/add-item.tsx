'use client'
import { cn } from '@/lib/utils'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from './ui/button'
import { Input } from './ui/input'

type Props = {
	label?: string
	onSubmit?: ({ title }: { title: string }) => void
	className?: string
	placeholder?: string
	isLoading?: boolean
}

export const AddItem = ({ label, onSubmit, className, placeholder, isLoading }: Props) => {
	const [value, setValue] = useState('')
	const [error, setError] = useState(false)

	const handleSubmit = () => {
		if (!value) {
			toast.error('Title is required')
			setError(true)
			return
		}
		onSubmit?.({ title: value })
		setValue('')
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		error && setError(false)
		setValue(e.target.value)
	}
	return (
		<div className={cn('inline-flex gap-3', className)}>
			<Input
				placeholder={placeholder}
				value={value}
				onChange={handleInputChange}
				className={cn(error && 'border-red-500')}
			/>
			<Button variant={'outline'} onClick={handleSubmit} disabled={isLoading}>
				{label || 'Add new'}
			</Button>
		</div>
	)
}
