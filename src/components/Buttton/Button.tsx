import React, { FC } from 'react';

interface ButtonProps {
	name?: string;
	style: React.CSSProperties;
	icon?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ name,style, icon }) => {
	return (
		<button
			style={style}
		>
			{name}

			{icon}
		</button>
	);
};

export default Button;
