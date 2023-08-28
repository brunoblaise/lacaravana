import { FC, use } from 'react';
import './checkout.css';
import Image from 'next/image';
import Button from '@/components/Buttton/Button';
import useUser from '@/store/store';
import { Empty } from 'antd';
import { url } from '@/utils/url';
import { toast } from 'react-hot-toast';
import cookieCutter from 'cookie-cutter';

interface checkoutProps {
	data:
		| {
				createdAt: string;
				email: string;
				id: number;
				name: string;
				password: string;
				role: string;
				updatedAt: string;
		  }
		| undefined;
}

//TODO:  rendering problem in checkout && price update && checkot all products
const Checkout: FC<checkoutProps> = ({ data }) => {
	const { store, removeAll } = useUser();

	// const tokenizer = document.cookie.split('=')[1];
	const tokenizer = cookieCutter.get('token');

	console.log(tokenizer, 'tokenizer')
	const post = async (id: number) => {
		try {
			const res = await fetch(`${url}/api/v1/order/place/${id}`, {
				method: 'POST',
				headers: { 'Content-type': 'application/json', 'token': tokenizer },
				// body: {  quantity: store.}
			});
			const data = await res.json();

			const { msg, STATUS } = data;
			if (STATUS === 200) {
				toast.success(msg);

				/// set token
				//document.cookie = `token=${data.token}`;
				//redirect.push('/dashboard');
			} else {
				return toast.error(msg || 'Server error');
			}
		} catch (err: any) {
			console.error('<checkout post post>', err);
			toast.error('Server error');
		}
	};

	console.log(store, 'store');
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
						{data?.name}
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

				{store?.length === undefined && store?.length === 0
					? ''
					: store?.map((item: any) => (
							<div className="menucard" key={item.id}>
								<Image
									src="/images/toppng.png"
									alt="checkout"
									width={89}
									height={86}
									objectFit="cover"
								/>
								<div style={{ paddingTop: '10px' }}>
									<h2>{item.name}</h2>
									<span>{item?.price !== undefined ? `RWF ${item.price}` : ''}</span>

									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
											position: 'relative',
											bottom: '1px',
											left: '130px',
										}}
									>
										<Image
											src="/images/decrease.svg"
											alt="checkout"
											width={30}
											height={30}
											objectFit="cover"
										/>
										<h2>{item.quantity}</h2>
										<Image
											src="/images/increse.svg"
											alt="increase"
											width={30}
											height={30}
											objectFit="cover"
											onClick={() => {
												item.quantity++;
											}}
										/>
									</div>
								</div>
							</div>
					  ))}

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
						cursor: 'pointer',
					}}
					onClick={() => {
						removeAll();
						//post(item.id);
					}}
				/>
			</div>
		</div>
	);
};

export default Checkout;

