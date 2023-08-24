import Image from 'next/image';
import { FC } from 'react';

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
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
			<h1 style={{ marginBottom: '20px' }}>Find Us</h1>
			<Image
				src="/images/rectangle.png"
				alt="rectangle"
				width={160}
				height={9}
				loading="lazy"
				object-fit="cover"
			/>
			<div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
				<div>
					<Image
						src="/images/map.png"
						alt="map"
						width={603}
						height={567}
						loading="lazy"
						object-fit="cover"
					/>
				</div>
				<div
					style={{
						color: '#FFF',
						fontSize: '25px',
						fontStyle: 'normal',
						fontWeight: '400',
						lineHeight: '40px',
						letterSpacing: '2.25px',
						width: '616px',
						height: '419px',
						paddingLeft: '130px',
					}}
				>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industrys standard dummy text ever since the 1500s.
					</p>
					<br />
					<p>ATTENDANCE Monday to Sunday 12:00pm - 8:00pm </p>
					<br />
					<p>DELIVERY Monday - Sunday 12:00pm - 8:00pm</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
