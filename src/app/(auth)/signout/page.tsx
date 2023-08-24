'use client';
import { FC, useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Segmente from '@/components/segmente';
import { url } from '@/utils/url';
import { toast } from 'react-hot-toast';
interface User {
	email: string;
	password: string;
	name: string;
}

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};
const page: FC = ({}) => {
	const [user, setUser] = useState({});
	const post = async () => {
		try {
			const res = await fetch(`${url}/api/v1/auth/signup`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(user),
			});
			const data = await res.json();
			console.log(data);
			toast.success('Loggged In ');
		} catch (err) {
			console.error('<signup post>', err);
			toast.error('Server error');
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
			autoComplete="off"
			onFinish={(values) => {
				const { email, password, name }: User = values;
				setUser({ email, password, name });
			}}
		>
			<Segmente
				signin="Signin"
				signout="Signout"
			/>

			<div style={{ marginTop: '18%' }}>
				<Form.Item
					label="Username"
					name="name"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Email"
					name="email"
					rules={[{ required: true, message: 'Please input your email!' }]}
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
						Signup
					</Button>
				</Form.Item>
			</div>
		</Form>
	);
};

export default page;
