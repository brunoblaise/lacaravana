import Image from 'next/image';
import { FC } from 'react';
import Button from '../Buttton/Button';

interface MenuProps {}

const Menup: FC<MenuProps> = ({}) => {
	return (
		<div
			style={{
				backgroundColor: 'black',
				color: 'white',
				padding: '44px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
				bottom: '44.5px',
			}}
		>
			<h1 style={{ marginBottom: '20px' }}>Our menu</h1>
			<Image
				src="/images/rectangle.png"
				alt="rectangle"
				width={160}
				height={9}
				loading="lazy"
				object-fit="cover"
			/>
			<p
				style={{
					color: '#FFF',
					fontSize: '25px',
					fontStyle: 'normal',
					fontWeight: '400',
					lineHeight: '40px',
					letterSpacing: '2.25px',
					width: '916px',
					margin: '20px',
				}}
			>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
				into electronic typesetting, remaining essentially unchanged.
			</p>
			<div
				style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'space-between' }}
			>
				<div>
					<Image
						src="/images/pizza.png"
						alt="map"
						width={576}
						height={356}
						loading="lazy"
						object-fit="cover"
					/>
				</div>
				<div
					style={{
						paddingLeft: '20px',
					}}
				>
					<Image
						src="/images/dough.png"
						alt="map"
						width={576}
						height={356}
						loading="lazy"
						object-fit="cover"
					/>
				</div>
			</div>
			<Button
				name="Menu"
				style={{
					color: 'white',
					backgroundColor: 'transparent',
					textAlign: 'center',
					fontSize: '17px',
					fontStyle: 'normal',
					fontWeight: '700',
					lineHeight: '0px',
					borderRadius: '2px',
					border: `2px solid #F2C94C`,
					width: '129px',
					height: '54px',
					margin: '20px',
				}}
			/>
		</div>
	);
};

export default Menup;
