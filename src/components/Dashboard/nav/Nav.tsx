import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import style from './nav.module.css';
import './nav.css';
interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
	return (
		<div className={style.menu}>
			<div className={style.nav}>
				<div>
					<Link href="/">
						<Image
							src="/images/logo.svg"
							alt="logo"
							loading="lazy"
							width={65}
							height={65}
							object-fit="cover"
						/>
					</Link>
				</div>
				<div className={style.space}>
					<li>
						<Link href="*">
							<Image
								src="/images/not.png"
								alt="logo"
								loading="lazy"
								width={40}
								height={40}
								object-fit="cover"
							/>
						</Link>
					</li>
					<li>
						<Link href="*">
							<Image
								src="/images/pie.png"
								alt="logo"
								loading="lazy"
								width={40}
								height={40}
								object-fit="cover"
							/>
						</Link>
					</li>
					<li>
						<Link href="*">
							<Image
								src="/images/account.svg"
								alt="logo"
								loading="lazy"
								width={40}
								height={40}
								object-fit="cover"
							/>
						</Link>
					</li>
					<li>
						<Link href="*">
							<Image
								src="/images/chat.png"
								alt="logo"
								loading="lazy"
								width={40}
								height={40}
								object-fit="cover"
							/>
						</Link>
					</li>
					<li>
						<Link href="*">
							<Image
								src="/images/Email.svg"
								alt="logo"
								loading="lazy"
								width={40}
								height={40}
								object-fit="cover"
							/>
						</Link>
					</li>
					<li>
						<Link href="*">
							<Image
								src="/images/Person.svg"
								alt="logo"
								loading="lazy"
								width={40}
								height={40}
								object-fit="cover"
							/>
						</Link>
					</li>
					<li>
						<Link href="*">
							<Image
								src="/images/settings.svg"
								alt="logo"
								loading="lazy"
								width={40}
								height={40}
								object-fit="cover"
							/>
						</Link>
					</li>
				</div>
			</div>
		</div>
	);
};

export default Nav;
