'use client';

import { MenuProvider } from '@components/menu';

import dayjs from 'dayjs';

import Calendar from './calendar';
import Menu from './menu';

export default function Aside() {
    return (
        <aside className="fixed bottom-0 right-0 top-0 w-[450px] border-l border-black p-5">
            <div className="min-h-screen overflow-y-auto">
                <div className="relative flex w-full items-center justify-end font-mono text-sm font-medium">
                    <div className="mb-[5px] text-right text-sm">
                        Hello, <strong>My Dashboard</strong>
                        <div className="mt-[2px] text-xs">Super Admin</div>
                    </div>
                    <MenuProvider>
                        <Menu />
                    </MenuProvider>
                </div>
                <small className="mt-[5px] block w-full text-right text-[8px] italic">Recently Logged In : {dayjs().format('YYYY-MM-DD HH:mm Z')}</small>
                <section className="mx-[5px] my-5 rounded-lg p-2.5 shadow-lg">
                    <Calendar />
                </section>
            </div>
        </aside>
    );
}
