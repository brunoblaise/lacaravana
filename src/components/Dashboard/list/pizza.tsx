'use client';

import Button from '@/components/Buttton/Button';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import './pizza.css';
import { url } from '@/utils/url';
import useUser from '@/store/store';
import { toast } from 'react-hot-toast';
import { metadata } from '@/app/layout';
interface pizzaProps {
	rows: {
		available: boolean;
		createdAt: string;
		description: string;
		id: number;
		image: string;
		name: string;
		price: number;
		updatedAt: string;
	};
}
//TODO: click on pizza button keep in it store after in checkout then post

const Pizza: FC = ({}) => {
	const [data, setData] = useState<pizzaProps[]>([]);
	const [loading, setLoading] = useState(true);
	const { addStore, store, updateData } = useUser();
	const fecthData = async () => {
		const response = await fetch(`${url}/api/v1/pizza/view?page=1&&limit=2`);
		const res = await response.json();
		console.log(res, '[res]');
		setData(res.data.rows);

		// {
		// 	status: 200,
		// 	data: pizzas.rows,
		// 	metadata: {
		// 		total: pizzas.count,
		// 		pages: 2,
		// 		page: 1
		// 	}
		// }
		setLoading(false);
	};

	useEffect(() => {
		fecthData();
	}, []);

	return (
		<div style={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
			<div>
				<Image
					src="/images/banner.png"
					alt="banner"
					width={745}
					height={286}
					loading="lazy"
					object-fit="cover"
				/>

				<Button
					name={'Order now'}
					style={{
						color: 'white',
						backgroundColor: '#FF9921',
						textAlign: 'center',
						fontSize: '17px',
						fontStyle: 'normal',
						fontWeight: '700',
						lineHeight: '0px',
						borderRadius: '15px',
						border: `2px solid #FF9921`,
						width: '160px',
						height: '60px',
						position: 'relative',
						top: '-50px',
						left: '-704px',
						margin: '0',
					}}
				/>
			</div>
			<div>
				<Image
					src="/images/menu.svg"
					alt={'menu'}
					width={1005}
					height={50}
					objectFit="cover"
					loading="lazy"
					style={{
						position: 'relative',

						left: '-200px',
					}}
				/>

				<div
					style={{
						display: 'grid',
						rowGap: '50px',
						gridTemplateColumns: 'auto auto ',
						width: '700px',
					}}
				>
					{loading && 'loading...'}
					{/* ? 'loading ...' */}
					{!loading && data?.length === 0
						? 'no data'
						: data?.map((item: any) => (
								<div
									key={item.id}
									style={{
										display: 'flex',
										flexDirection: 'row',
									}}
									className="menubar"
								>
									<Image
										src="/images/masked.png"
										alt={'pizza'}
										width={120}
										height={160}
										objectFit="cover"
										loading="lazy"
										style={{}}
									/>
									<div style={{ padding: '20px' }}>
										<h4>{item.name}</h4>
										<span>14-20 minutes</span>
										<div
											style={{
												display: 'flex',
												flexDirection: 'row',
											}}
										>
											<h5>${item.price}</h5>
											<Button
												icon={
													<Image
														src="/images/btn.png"
														width={40}
														height={40}
														alt="masked"
														objectFit="cover"
													/>
												}
												style={{
													backgroundColor: 'transparent',
													border: 'none',
													position: 'relative',
													cursor: 'pointer',
												}}
												onClick={() => {
													let alreadyIncart = false;
													store.forEach((i: any) => {
														if (i.id === item.id) {
															updateData(item.id, { quantity: i.quantity + 1 });
															alreadyIncart = true;
														}
													});
													if (!alreadyIncart) {
														addStore({
															available: item.available,
															id: item.id,
															name: item.name,
															price: item.price,
															image: item.image,
															quantity: 1,
														});
													}
												}}
											/>
										</div>
									</div>
								</div>
						  ))}
				</div>
			</div>
		</div>
	);
};

export default Pizza;
