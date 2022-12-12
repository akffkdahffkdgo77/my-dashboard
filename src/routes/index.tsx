import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BaseLayout from 'layouts/BaseLayout';
import Home from 'pages/Home';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BaseLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
