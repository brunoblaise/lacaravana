import { create } from 'zustand';

import { persist } from 'zustand/middleware';

interface User {
	data: {} | null;
	addUser: (user: {} | null) => void;
}

const useUser = create(
	persist<User>(
		(set) => ({
			data: null,
			addUser: (data: {} | null) => set({ data }),
		}),
		{
			name: 'user-storage',
		},
	),
);

export default useUser;
