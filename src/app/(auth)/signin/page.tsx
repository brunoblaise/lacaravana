'use client';
import { FC, useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Segmente from '@/components/segmente';
import { url } from '@/utils/url';

interface  User {
	email: string;
	password: string;
}

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

const page: FC = ({}) => {
	const [user, setUser] = useState({});
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
			console.log(data);
		} catch (err) {
			console.error('<signin post>', err);
		}
	};
	useEffect(() => {
		post();
	}, []);
	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 8 }}
			initialValues={{ remember: true }}
			onFinish={(values) => {
				const { email, password }: User = values;
				setUser({ email, password });
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
