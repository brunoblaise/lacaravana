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
	store:
		| [
				{
					available: boolean;
					id: number;
					name: string;
					price: number;
					image: string;
					quantity: number;
				},
		  ]
		| any;
	addStore: (product: any) => void;
	updateData: (id: number, newData: {}) => void;
	removeAll: () => void;
}

export const useUser = create(
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

			store: [],
			addStore: (product: any) =>
				set((state) => ({
					store: [...state.store, product],
				})),
			updateData: (id, newData) =>
				set((state) => ({
					store: state.store.map((item: any) => (item.id === id ? { ...item, ...newData } : item)),
				})),

			removeAll: () =>
				set((state) => ({
					store: [],
				})),
		}),

		{
			name: 'storage',
		},
	),
);

export default useUser;
