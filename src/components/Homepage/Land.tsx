import Image from 'next/image';
import { FC } from 'react';
import Button from '../Buttton/Button';
import Contact from './Contact';
import Menup from './Menup';

interface LandProps {}

const Land: FC<LandProps> = ({}) => {
	return (
		<>
			<div>
				<div style={{ position: 'relative', bottom: '40px', zIndex: -99 }}>
					<Image
						src="/images/lacaravana.png"
						alt="hero"
						width={1400}
						height={1000}
						loading="lazy"
						object-fit="cover"
					/>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						padding: '40px',
						backgroundColor: 'black',
						color: 'white',
						position: 'relative',
						bottom: '44.5px',
					}}
				>
					<div>
						<h1>ABOUT US</h1>
						<Image
							src="/images/rectangle.png"
							alt="hero"
							width={460}
							height={9}
							loading="lazy"
							object-fit="cover"
						/>
						<p style={{ width: '500px', height: '600px', lineHeight: '32px', marginTop: '30px' }}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
							the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has survived not only five centuries, but
							also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is
							simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
							standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five centuries, but also the
							leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy
							text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
							text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
							make a type specimen book. It has survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</p>
						<Button
							name="Read more"
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
								margin: '0',
							}}
						/>
					</div>
					<div>
						<Image
							src="/images/restaurant.png"
							alt="hero"
							width={513}
							height={743}
							loading="lazy"
							object-fit="cover"
						/>
					</div>
				</div>
			</div>
			<Contact />
			<Menup />

			<footer style={{ position: 'relative', bottom: '50px', zIndex: -99 }}>
				<Image
					src="/images/footer.png"
					alt="footer"
					width={1400}
					height={1000}
					loading="lazy"
					object-fit="cover"
				/>
			</footer>
		</>
	);
};

export default Land;
