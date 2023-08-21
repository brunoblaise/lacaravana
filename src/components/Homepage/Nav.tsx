'use client'

import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
	{
		label: (
			<h1>
				<Link
					href="/"
					style={{ color: 'white', textDecoration: 'none' }}
				>
					Lacaravana
				</Link>
			</h1>
		),
		key: 'mail',
	},

	{
		label: (
			<div style={{ paddingLeft: '700px' }}>
				<a
					href="https://ant.design"
					target="_blank"
					rel="noopener noreferrer"
				>
					Home
				</a>

			</div>
		),
		key: 'home',
	},

	{
		label: (
			<div >
			

				<a
					href="https://ant.design"
					target="_blank"
					rel="noopener noreferrer"
				>
					About Us
				</a>

				
			</div>
		),
		key: 'about',
	},

	{
		label: (
			<div >
				<a
					href="https://ant.design"
					target="_blank"
					rel="noopener noreferrer"
				>
					Contact Us
				</a>
			</div>
		),
		key: 'contact',
	},
];

const Nav: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{backgroundColor: 'black', color: 'white'}} />;
};

export default Nav;