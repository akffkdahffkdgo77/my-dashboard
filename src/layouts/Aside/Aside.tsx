import { MenuProvider } from '@components/Menu';

import Calendar from './Calendar';
import Menu from './Menu';

export default function Aside() {
    return (
        <aside className="fixed bottom-0 right-0 top-0 w-[450px] border-l border-black p-5">
            <div className="min-h-screen overflow-y-auto">
                <div className="relative flex w-full items-center justify-end font-mono text-sm font-medium">
                    <div className="mb-[5px] text-right text-sm">
                        Hello, <strong>namiein</strong>
                        <div className="mt-[2px] text-xs">Super Admin</div>
                    </div>
                    <MenuProvider>
                        <Menu />
                    </MenuProvider>
                </div>
                <small className="mt-[5px] block w-full text-right text-[8px] italic">Recently Logged In : 2022-12-11 15:00 (+KST)</small>
                <section className="mx-[5px] my-5 rounded-lg p-2.5 shadow-lg">
                    <h2 className="w-full text-center font-mono text-base font-bold">Calendar</h2>
                    <Calendar />
                    <h3 className="mt-10 w-full font-mono text-sm font-bold">Tasks / Appointments</h3>
                    <ul className="mt-5">
                        <li className="w-full rounded-md bg-black p-5 text-white">Lorem ipsum</li>
                    </ul>
                </section>
            </div>
        </aside>
    );
}
