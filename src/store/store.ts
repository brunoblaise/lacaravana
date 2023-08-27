import { create } from 'zustand';

import { persist } from 'zustand/middleware';

interface User {
	data: {
		STATUS: number;
		token: string;
		msg: string;
		time: string;
		DATA: {};
	} | null;
	addUser: (
		data: {
			STATUS: number;
			token: string;
			msg: string;

			time: string;
			DATA: {};
		} | null,
	) => void;
}

const useUser = create(
	persist<User>(
		(set) => ({
			data: null,
			addUser: (
				data: {
					STATUS: number;
					token: string;
					msg: string;

					time: string;
					DATA: {};
				} | null,
			) => set({ data }),
		}),
		{
			name: 'user-storage',
		},
	),
);

export default useUser;
