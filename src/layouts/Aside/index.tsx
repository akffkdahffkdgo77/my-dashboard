import { createRef, useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import Calendar from 'component/Calendar';

type TabIndexType = {
    linkRefs: React.RefObject<HTMLAnchorElement>[];
    tabIndex: number;
};

const changeTabIndex = ({ linkRefs, tabIndex }: TabIndexType) => {
    if (tabIndex) {
        const rest = linkRefs.slice(0, linkRefs.length);
        rest.pop();
        rest.forEach((ref) => (ref.current!.tabIndex = -1));
    } else {
        const rest = linkRefs.slice(0, linkRefs.length);
        linkRefs.shift();
        rest.forEach((ref) => (ref.current!.tabIndex = -1));
    }
};

export default function Aside() {
    const menuRef = useRef<HTMLUListElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [key, setKey] = useState('');

    const linkRefs = Array.from({ length: 2 }).map(() => createRef<HTMLAnchorElement>());

    // When click outside of Menu List, remove the list
    useEffect(() => {
        const handleClickOutsideSelect = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsVisible(false);
            }
        };

        window.addEventListener('click', handleClickOutsideSelect, true);
        return () => window.removeEventListener('click', handleClickOutsideSelect, true);
    }, []);

    // Add Keyboard Event Listener
    useEffect(() => {
        const onKeyMove = (event: KeyboardEvent) => {
            if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && !isVisible) {
                setIsVisible(true);
                setKey(event.key);
            }
        };

        window.addEventListener('keydown', onKeyMove, true);
        return () => window.removeEventListener('keydown', onKeyMove, true);
    }, [isVisible, linkRefs]);

    // Menu Button
    //  Keyboard Support
    //  Down Arrow, Space, Enter -> Opens menu and moves focus to first menuitem
    //  Up Arrow -> Opens menu and moves focus to last menuitem
    useEffect(() => {
        if (isVisible && (key === 'Enter' || key === 'Space' || key === 'ArrowUp')) {
            const link = linkRefs[0].current as HTMLAnchorElement;
            link.focus();
            link.tabIndex = 0;
            changeTabIndex({ linkRefs, tabIndex: 0 });
        } else if (isVisible && key === 'ArrowDown') {
            const link = linkRefs[linkRefs.length - 1].current as HTMLAnchorElement;
            link.focus();
            link.tabIndex = 0;
            changeTabIndex({ linkRefs, tabIndex: -1 });
        }
    }, [isVisible, key, linkRefs]);

    // Menu Button on click
    const onClick = () => setIsVisible((prev) => !prev);

    // Menu Button on key down
    const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (e.key === 'Enter' || e.code === 'Space') {
            setIsVisible((prev) => !prev);
            setKey(e.key === 'Enter' ? 'Enter' : 'Space');
        }
    };

    // Remove Menu Focus
    const onMouseEnter = () => linkRefs.forEach((ref) => ref.current?.blur());

    // When leave Menu List -> Focus First Element
    const onMouseLeave = () => {
        if (linkRefs[0].current && isVisible) {
            linkRefs[0].current.focus();
            linkRefs[0].current.tabIndex = 0;
            changeTabIndex({ linkRefs, tabIndex: 0 });
        }
    };

    return (
        <aside className="fixed right-0 top-0 bottom-0 p-5 w-[450px] border-l border-black">
            <div className="min-h-screen overflow-y-auto">
                <div className="relative w-full justify-end flex items-center text-sm font-mono font-medium">
                    <div className="mb-[5px] text-right text-sm">
                        Hello, <strong>namiein</strong>
                        <div className="mt-[2px] text-xs">Super Admin</div>
                    </div>
                    <button
                        id="menubutton"
                        aria-expanded={!isVisible}
                        aria-haspopup="true"
                        aria-controls="menu"
                        type="button"
                        onClick={onClick}
                        onKeyDown={onKeyDown}
                        className="ml-2.5 rounded-full border border-black w-[40px] h-[40px]"
                    >
                        N
                    </button>
                    {isVisible && (
                        <ul
                            ref={menuRef}
                            id="menu"
                            role="menu"
                            aria-labelledby="menubutton"
                            onMouseLeave={onMouseLeave}
                            className="absolute top-10 w-[200px] bg-white border border-black rounded-sm overflow-hidden"
                        >
                            <li role="none" onMouseEnter={onMouseEnter} className="w-full h-full">
                                <Link
                                    tabIndex={0}
                                    role="menuitem"
                                    to="/"
                                    ref={linkRefs[0]}
                                    className="w-full block border-b border-black h-10 leading-10 px-5 focus:bg-black focus:text-white hover:bg-black hover:text-white last-of-type:border-none"
                                >
                                    My Page
                                </Link>
                            </li>
                            <li role="none" onMouseEnter={onMouseEnter} className="w-full h-full">
                                <Link
                                    tabIndex={-1}
                                    role="menuitem"
                                    to="/"
                                    ref={linkRefs[1]}
                                    className="w-full block border-b border-black h-10 leading-10 px-5 focus:bg-black focus:text-white hover:bg-black hover:text-white last-of-type:border-none"
                                >
                                    Sign Out
                                </Link>
                            </li>
                        </ul>
                    )}
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
