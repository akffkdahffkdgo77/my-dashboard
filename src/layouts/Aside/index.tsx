import Calendar from 'component/Calendar';

export default function Aside() {
    return (
        <aside className="fixed right-0 top-0 bottom-0 p-5 w-[450px] border-l border-black">
            <div className="min-h-screen overflow-y-auto">
                <div className="w-full justify-end flex items-center text-sm font-mono font-medium">
                    <div className="mb-[5px] text-right text-sm">
                        Hello, <strong>namiein</strong>
                        <div className="mt-[2px] text-xs">Super Admin</div>
                    </div>
                    <button type="button" className="ml-2.5 rounded-full border border-black w-[40px] h-[40px]">
                        N
                    </button>
                </div>
                <small className="mt-[5px] italic w-full block text-right text-[8px]">Recently Logged In : 2022-12-11 15:00 (+KST)</small>
                <section className="my-5 mx-[5px] shadow-lg rounded-lg p-2.5">
                    <h2 className="w-full text-base font-bold font-mono text-center">Calendar</h2>
                    <Calendar />
                    <h3 className="mt-10 w-full text-sm font-bold font-mono">Tasks / Appointments</h3>
                    <ul className="mt-5">
                        <li className="w-full p-5 bg-black text-white rounded-md">Lorem ipsum</li>
                    </ul>
                </section>
            </div>
        </aside>
    );
}
