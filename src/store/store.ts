import { create } from 'zustand';

import { persist } from 'zustand/middleware';

interface User {
	data: {
		STATUS: number;
		token: string;
		msg: string;
		time: string;
		DATA: {
			createdAt: string;
			email: string;
			id: number;
			name: string;
			password: string;
			role: string;
			updatedAt: string;
		};
	} | null;
	addUser: (
		data: {
			STATUS: number;
			token: string;
			msg: string;

			time: string;
			DATA: {
				createdAt: string;
				email: string;
				id: number;
				name: string;
				password: string;
				role: string;
				updatedAt: string;
			};
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
					DATA: {
						createdAt: string;
						email: string;
						id: number;
						name: string;
						password: string;
						role: string;
						updatedAt: string;
					};
				} | null,
			) => set({ data }),
		}),
		{
			name: 'user-storage',
		},
	),
);

export default useUser;
