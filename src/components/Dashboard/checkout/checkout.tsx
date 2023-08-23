import { FC } from 'react';
import './checkout.css';
import Image from 'next/image';
import Button from '@/components/Buttton/Button';
interface checkoutProps {}

const Checkout: FC<checkoutProps> = ({}) => {
	return (
		<div
			style={{ marginLeft: '-230px', padding: '20px' }}
			className="checkout"
		>
			<div className="nav">
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<Image
						src="/images/user.png"
						alt="user"
						width={33}
						height={33}
						objectFit="cover"
					/>
					<h2
						style={{
							fontSize: '18px',
							padding: '5px',
						}}
					>
						John Smith
					</h2>
				</div>
				<div style={{ position: 'relative', left: '190px' }}>
					<Image
						alt="notification"
						src="/images/not.png"
						width={32}
						height={32}
					/>
				</div>
			</div>

			<div style={{ position: 'relative', top: '80px' }}>
				<Image
					src="/images/cart.png"
					alt="checkout"
					width={400}
					height={249}
					objectFit="cover"
				/>

				<div style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
					<h1>Order Menu</h1>
					<h3 style={{ padding: '10px', marginLeft: '120px' }}>See All</h3>
				</div>

				<div className="menucard">
					<Image
						src="/images/toppng.png"
						alt="checkout"
						width={89}
						height={86}
						objectFit="cover"
					/>
					<div style={{ padding: '10px' }}>
						<h2>Chicken Burger</h2>
						<p>8 inch</p>
						<span>$12.00</span>

						<div style={{ display: 'flex', flexDirection: 'row', position:'relative', bottom:'1px', left:'130px' }}>
							<Image
								src="/images/decrease.svg"
								alt="checkout"
								width={30}
								height={30}
								objectFit="cover"
							/>
							<h2>1</h2>
							<Image
								src="/images/increse.svg"
								alt="checkout"
								width={30}
								height={30}
								objectFit="cover"
							/>
						</div>
					</div>
				</div>

				<div style={{ display: 'flex', flexDirection: 'row', padding: '16px' }}>
					<h2>Total Price</h2>
					<span style={{ marginLeft: '180px' }}>$52.00</span>
				</div>
				<Button
					name="Checkout"
					style={{
						color: 'white',
						backgroundColor: '#FF9921',
						textAlign: 'center',
						fontSize: '17px',
						fontStyle: 'normal',
						fontWeight: '700',
						borderRadius: '15px',
						border: `2px solid #FF9921`,
						width: '140px',
						height: '40px',
						position: 'relative',
						top: '10px',
						left: '120px',
					}}
				/>
			</div>
		</div>
	);
};

export default Checkout;
