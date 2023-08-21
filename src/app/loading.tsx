import { FC } from 'react';
import { Spin } from 'antd';

const loading: FC = () => {
	return (
		<div>
			{' '}
			<div style={{ padding: '100px' }}>
				<Spin size="large" />
			</div>
		</div>
	);
};

export default loading;
