import Image from 'next/image';
import { FC } from 'react';

interface pizzaProps {}

const Pizza: FC<pizzaProps> = ({}) => {
	return (
		<div style={{ margin: '30px' }}>
			<Image
				src="/images/banner.png"
				alt="banner"
				width={745}
				height={286}
				loading="lazy"
				object-fit="cover"
			/>
		</div>
	);
};

export default Pizza;
