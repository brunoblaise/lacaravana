import { FC } from 'react';
import Nav from '../nav/Nav';
import Header from '../header/header';
import Checkout from '../checkout/checkout';
import Pizza from '../list/pizza';

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
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Header />
					<Pizza/>
				</div>

				<Checkout />
			</div>
		</div>
	);
};

export default Body;
