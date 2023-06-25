import { Outlet } from 'react-router-dom';

import Aside from '@layouts/Aside';
import Footer from '@layouts/Footer';
import Header from '@layouts/Header';

export default function BaseLayout() {
    return (
        <div className="w-full">
            <Header />
            <main className="mb-10 mr-[450px] mt-[80px] h-full p-5">
                <Outlet />
            </main>
            <Aside />
            <Footer />
        </div>
    );
}
