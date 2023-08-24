import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface MenulistProps {
	style: React.CSSProperties;
	lists: {
		image: string;
		title: string;
		description: string;
		price: string;
		width: number;
		height: number;
	}[];
	href: string;
    priceColor: React.CSSProperties;
    titleColor: React.CSSProperties;
}

const Menulist: FC<MenulistProps> = ({ style, lists, href, priceColor, titleColor }) => {
	return (
		<div>
			<div style={style}>
				{lists.map((list, index) => (
					<Link
						key={index}
						href={href}
                        style={{ textDecoration: 'none', color: 'white' , cursor: 'pointer', width: '100%' }}
					>
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
							<Image
								src={list.image}
								alt="image"
								height={list.height}
								width={list.width}
							/>
							<div style={{width: '400px'}}>
								<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
									<h3 style={titleColor}> {list.title}</h3>
									<h4 style={priceColor}>{list.price}</h4>
								</div>

								<p>{list.description}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Menulist;
