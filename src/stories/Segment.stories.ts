import type { Meta, StoryObj } from '@storybook/react';
import Segmente from '../components/segmente';

const meta = {
	title: 'Example/segmente',
	component: Segmente,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Segmente>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
	args: {
		signin: 'signin',
		signout: 'signout',
	},
};
