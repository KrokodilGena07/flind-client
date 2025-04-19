import {RouteObject} from 'react-router-dom';
import LazyHome from '@/pages/home/LazyHome';
import LazyProfile from '@/pages/profile/LazyProfile';
import LazyAuth from '@/pages/auth/LazyAuth';

export enum Pages {
    HOME = '/',
    PROFILE = '/profile',
    REGISTRATION = '/registration',
    LOGIN = '/login'
}

export const privateRoutes: RouteObject[] = [
    {path: Pages.HOME, element: <LazyHome/>},
    {path: Pages.PROFILE, element: <LazyProfile/>}
];

export const publicRoutes: RouteObject[] = [
    {path: '*', element: <LazyAuth/>}
];