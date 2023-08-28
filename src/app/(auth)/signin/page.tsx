'use client';
import { FC, useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Segmente from '@/components/segmente';
import { url } from '@/utils/url';
import { toast } from 'react-hot-toast';
import useUser from '@/store/store';
import { useRouter } from 'next/navigation';
import cookieCutter from 'cookie-cutter';
//DONE: set token in cookie in nextjs server side
//TODO: file middleware.ts -> root folder to check token (list to be allowed to access)

interface User {
	email: string;
	password: string;
}

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

const page: FC = ({}) => {
	const { addUser } = useUser();
	const [user, setUser] = useState({});
	const redirect = useRouter();
	const post = async () => {
		try {
			const res = await fetch(`${url}/api/v1/auth/login`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(user),
			});
			const data = await res.json();

			const { msg, STATUS } = data;
			if (STATUS === 200) {
				toast.success(msg);
				addUser(data);
				/// set token
				// document.cookie = `token=${data.token}`;
				cookieCutter.set('token', data?.token);
				redirect.push('/dashboard');
			} else {
				return toast.error(msg || 'Server error');
			}
		} catch (err: any) {
			console.error('<signin post>', err);
			toast.error('Server error');
		}
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 8 }}
			initialValues={{ remember: true }}
			onFinish={(values) => {
				console.log(values);
				const { email, password }: User = values;
				setUser({ email, password });
				post();
			}}
			autoComplete="off"
		>
			<Segmente
				signin="Signin"
				signout="Signout"
			/>

			<div style={{ marginTop: '18%' }}>
				<Form.Item
					label="Username"
					name="email"
					rules={[
						{ required: true, message: 'Please input your username!' },
						{
							type: 'email',
							message: 'The input is not valid E-mail!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item {...tailLayout}>
					<Button
						type="primary"
						htmlType="submit"
					>
						Login
					</Button>
				</Form.Item>
			</div>
		</Form>
	);
};

export default page;
