import { useContext, useEffect, useRef } from 'react';

import MenuButtonContext from 'common/Menu/context/Context';
import { IMenuList } from 'common/Menu/types';

export default function MenuList({ children }: IMenuList) {
    const context = useContext(MenuButtonContext);
    if (!context) {
        throw new Error('Not inside MenuButtonContext!');
    }

    const { isVisible, setIsVisible, onMouseLeave } = context;

    const menuRef = useRef<HTMLUListElement>(null);

    // When click outside of Menu List, remove the list
    useEffect(() => {
        const handleClickOutsideSelect = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsVisible(false);
            }
        };

        window.addEventListener('click', handleClickOutsideSelect, true);
        return () => window.removeEventListener('click', handleClickOutsideSelect, true);
    }, [setIsVisible]);

    return (
        <>
            {isVisible && (
                <ul
                    ref={menuRef}
                    id="menu"
                    role="menu"
                    aria-labelledby="menubutton"
                    onMouseLeave={onMouseLeave}
                    className="absolute top-10 w-[200px] bg-white border border-black rounded-sm overflow-hidden"
                >
                    {children}
                </ul>
            )}
        </>
    );
}
