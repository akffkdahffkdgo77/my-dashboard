'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed left-0 right-[450px] top-0 flex min-h-[80px] items-center justify-end gap-10 bg-white p-5 font-mono">
            <h1 className="flex-1 font-mono text-4xl font-bold">My Dashboard</h1>
            <ul className="flex w-full items-center justify-end gap-5 font-mono">
                <li>
                    <Link className={`${pathname === '/' ? 'font-bold' : ''}`} href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/">My Settings</Link>
                </li>
            </ul>
            <div>
                <input type="text" name="search" placeholder="Search..." className="w-[240px] rounded-md border border-black p-[8px] font-mono outline-none transition-all focus:w-[320px]" />
            </div>
        </header>
    );
}
