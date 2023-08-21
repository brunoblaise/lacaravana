import { FC } from 'react';

interface ButtonProps {
	name: string;
	color: string;
	backgroundColor: string;
	margin?: string;
}

const Button: FC<ButtonProps> = ({ name, color, backgroundColor, margin = '0' }) => {
	return (
		<button
			style={{
				color: color,
				backgroundColor: backgroundColor,
				textAlign: 'center',
				fontSize: '17px',
				fontStyle: 'normal',
				fontWeight: '700',
				lineHeight: '0px',
				borderRadius: '2px',
				border: '2px solid #F2C94C',
				width: '129px',
				height: '54px',
				margin: margin,
			}}
		>
			{name}
		</button>
	);
};

export default Button;
