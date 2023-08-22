import { FC } from 'react';
import Nav from '../nav/Nav';
import Header from '../header/header';
import Checkout from '../checkout/checkout';

interface bodyProps {}

const Body: FC<bodyProps> = ({}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
			}}
		>
			<Nav />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<Header />
				<Checkout />
			</div>
		</div>
	);
};

export default Body;
