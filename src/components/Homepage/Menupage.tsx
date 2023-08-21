import { FC } from 'react';
import Menulist from '../menu/Menulist';
import { ColorFactory } from 'antd/es/color-picker/color';
import Image from 'next/image';

interface MenupageProps {}

const Menupage: FC<MenupageProps> = ({}) => {
	const lists = [
		{
			image: '/images/pizza.png',
			title: 'Pizza',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.',
			price: '$12',
			width: 143,
			height: 100,
		},
		{
			image: '/images/pizza.png',
			title: 'Pizza',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.',
			price: '$12',
			width: 143,
			height: 100,
		},
		{
			image: '/images/pizza.png',
			title: 'Pizza',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.',
			price: '$12',
			width: 143,
			height: 100,
		},

		{
			image: '/images/pizza.png',
			title: 'Pizza',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.',
			price: '$12',
			width: 143,
			height: 100,
		},

		{
			image: '/images/pizza.png',
			title: 'Pizza',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.',
			price: '$12',
			width: 143,
			height: 100,
		},

		{
			image: '/images/pizza.png',
			title: 'Pizza',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.',
			price: '$12',
			width: 143,
			height: 100,
		},

		{
			image: '/images/pizza.png',
			title: 'Pizza',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.',
			price: '$12',
			width: 143,
			height: 100,
		},
	];
	return (
		<div
			style={{
				background: 'black',
				padding: '40px',
				color: 'white',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1>OUR MENU</h1>
			<Image
				src="/images/rectangle.png"
				alt="rectangle"
				width={460}
				height={9}
				loading="lazy"
				object-fit="cover"
			/>
			<div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						padding: '30px',
						justifyContent: 'space-evenly',
					}}
				>
					<h3>All</h3>
					<h3>Starters</h3>
					<h3>Main</h3>
					<h3>Drinks</h3>
				</div>
			</div>
			<Menulist
				style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '2rem' }}
				lists={lists}
				priceColor={{ color: '#F2C94C' }}
				titleColor={{ color: '#F2C94C' }}
				href="/dashboard"
			/>
		</div>
	);
};

export default Menupage;
