'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import AuthService from '@/services/auth/auth.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(4),
})

export function Login() {
	const router = useRouter()

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: 'free@samuraijs.com',
			password: 'free',
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
		AuthService.login(values).then(res => {
			router.push('/')

			form.setError('email', { message: res.messages[0] })
			form.setError('password', { message: res.messages[0] })
		})
	}

	return (
		<Form {...form}>
			<div className='flex flex-col min-h-screen  lg:p-24 p-6 pt-[40px_!important]'>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 max-w-[400px] mx-auto'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder='email' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input placeholder='password' type='password' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit'>Login</Button>
				</form>
			</div>
		</Form>
	)
}
