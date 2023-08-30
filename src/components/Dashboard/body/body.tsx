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
			{DATA?.role === 'user' ? (
				<>
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
							className=' w-full flex'
						>
						
							<Header name={name} />
							<Pizza />
						</div>

						<Checkout data={DATA} />
					</div>
				</>
			) : (
				<>
					<h1>Admin</h1>
				</>
			)}
		</div>
	);
};

export default Body;
