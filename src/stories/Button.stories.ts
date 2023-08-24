import type { Meta, StoryObj } from '@storybook/react';

import Page from '../components/Buttton/Button';

const meta = {
	title: 'Example/Button',
	component: Page,
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

export const Name: Story = {
	args: {
		name: 'Story',
		style: {
			color: 'white',
			backgroundColor: '#F2C94C',
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
		},
	},
};


/*export const Icon: Story = {
	args: {
		icon:,
		style: {
			color: 'white',

			margin: '0',
		},
	},
};*/