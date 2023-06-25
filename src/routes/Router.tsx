import { createBrowserRouter } from 'react-router-dom';

import BaseLayout from '@layouts/BaseLayout';
import Error from '@pages/Error';
import Home from '@pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    }
]);

export default router;
