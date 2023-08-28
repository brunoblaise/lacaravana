'use client';
import { FC } from 'react';
import Nav from '../nav/Nav';
import Header from '../header/header';
import Checkout from '../checkout/checkout';
import Pizza from '../list/pizza';
import useUser from '@/store/store';

interface bodyProps {}

const Body: FC<bodyProps> = ({}) => {
	const { data } = useUser();

	const name: string | undefined= data?.DATA.name;

	//data?.map((item) => console.log(item));
	const { DATA } = data || {};
	//TODO:get datato the header
	//TODO: get data to the checkout
	//TODO: get the role of the user


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
					<Header name={name} />
					<Pizza />
				</div>

				<Checkout data={DATA} />
			</div>
		</div>
	);
};

export default Body;
