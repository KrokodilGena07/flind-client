import React, {FC, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {useUserStore} from '@/store/useUserStore';
import {privateRoutes, publicRoutes} from '@/router';

const AppRouter: FC = () => {
    const {user} = useUserStore();

    return (
        <Suspense fallback={'isLoading...'}>
            <Routes>
                {(user ? privateRoutes : publicRoutes).map(item =>
                    <Route
                        key={item.path}
                        path={item.path}
                        element={item.element}
                    />
                )}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;