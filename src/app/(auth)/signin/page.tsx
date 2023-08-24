'use client';
import { FC, useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Segmente from '@/components/segmente';

interface pageProps {}

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

const page: FC<pageProps> = ({}) => {
	const [user, setUser] = useState({});

	useEffect(() => {
		console.log(user);
	}, [user]);
	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 8 }}
			initialValues={{ remember: true }}
			onFinish={(values) => {
				const { username, password } = values;
				setUser({ username, password });
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
					name="username"
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
