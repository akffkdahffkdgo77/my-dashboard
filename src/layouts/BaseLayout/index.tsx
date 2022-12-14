import { Outlet } from 'react-router-dom';

import Aside from 'layouts/Aside';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

export default function BaseLayout() {
    return (
        <div className="w-full">
            <Header />
            <main className="p-5 mt-[80px] h-full">
                <Outlet />
            </main>
            <Aside />
            <Footer />
        </div>
    );
}
