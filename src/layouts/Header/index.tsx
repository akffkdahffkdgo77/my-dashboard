import { Link, useMatch } from 'react-router-dom';

export default function Header() {
    const isHome = useMatch('/');

    return (
        <header className="fixed top-0 left-0 p-5 right-[450px] min-h-[80px] font-mono bg-white flex items-center justify-end gap-10">
            <h1 className="flex-1 text-4xl font-bold font-mono">My Dashboard</h1>
            <ul className="w-full justify-end flex items-center gap-5 font-mono">
                <li>
                    <Link className={`${isHome ? 'font-bold' : ''}`} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/">My Settings</Link>
                </li>
            </ul>
            <div className="">
                <input type="text" name="search" placeholder="Search..." className="transition-all focus:w-[320px] w-[240px] p-[8px] border border-black rounded-md outline-none font-mono" />
            </div>
        </header>
    );
}
