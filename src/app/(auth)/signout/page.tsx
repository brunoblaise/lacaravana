'use client';
import { FC } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Segmente from '@/components/segmente';

interface pageProps {}

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};
const page: FC<pageProps> = ({}) => {
	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 8 }}
			initialValues={{ remember: true }}
			autoComplete="off"
		>
			<Segmente
				signin="Signin"
				signout="Signout"
			/>

			<div style={{ marginTop: '18%' }}>
				<Form.Item
					label="Email"
					name="email"
					rules={[{ required: true, message: 'Please input your email!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
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
