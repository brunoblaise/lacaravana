import React, { FC } from 'react';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
import Link from 'next/link';
interface SegmenteProps {
	signin: string;
	signout: string;
}
const Segmente: FC<SegmenteProps> = ({ signin, signout }) => {
	return (
		<Segmented
			options={[
				{
					label: <Link href="/signin">{signin}</Link>,
					value: 'Signin',
					icon: <BarsOutlined />,
				},
				{
					label: <Link href="/signout">{signout}</Link>,
					value: 'Signout',
					icon: <AppstoreOutlined />,
				},
			]}
		/>
	);
};

export default Segmente;
