import {create} from 'zustand/react';
import {immer} from 'zustand/middleware/immer';
import {User} from '@/models/User';
import {AuthResponse} from '@/models/AuthResponse';

interface UserStore {
    user: User | null;
    accessToken: string | null;
    setUser: (response: AuthResponse) => void,
    removeUser: () => void
}

export const useUserStore = create<UserStore>()(immer(set => ({
    user: JSON.parse(localStorage.getItem('User') || 'null'),
    accessToken: JSON.parse(localStorage.getItem('Token') || 'null'),
    setUser: (response) => {
        set({
            user: response.user,
            accessToken: response.accessToken
        });
        localStorage.setItem('User', JSON.stringify(response.user));
        localStorage.setItem('Token', response.accessToken);
    },
    removeUser: () => {
        set({
            user: null,
            accessToken: null
        });
        localStorage.removeItem('User');
        localStorage.removeItem('Token');
    }
})));