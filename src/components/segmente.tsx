import React, { FC } from 'react';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
interface SegmenteProps {
	signin: string;
	signout: string;
}
const Segmente: FC<SegmenteProps> = ({ signin, signout }) => {
	return (
		<Segmented
			options={[
				{
					label: signin,
					value: 'Signin',
					icon: <BarsOutlined />,
				},
				{
					label: signout,
					value: 'Signout',
					icon: <AppstoreOutlined />,
				},
			]}
		/>
	);
};

export default Segmente;
