import { useEffect, useRef } from 'react';

import useMenu from 'common/Menu/MenuContext/useMenu';

import type { MenuListPropsType } from 'common/Menu/MenuList/types';

export default function MenuList({ children }: MenuListPropsType) {
    const { isVisible, setIsVisible, onMouseLeave } = useMenu();

    const menuRef = useRef<HTMLUListElement>(null);

    /**
     *  Menu List
     *  When click outside of Menu List, remove the list
     */
    useEffect(() => {
        const handleClickOutsideSelect = (event: MouseEvent) => {
            if (isVisible && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsVisible(false);
            }
        };

        window.addEventListener('click', handleClickOutsideSelect, true);
        return () => window.removeEventListener('click', handleClickOutsideSelect, true);
    }, [isVisible, setIsVisible]);

    return isVisible ? (
        <ul ref={menuRef} id="menu" role="menu" aria-labelledby="menubutton" onMouseLeave={onMouseLeave} className="absolute top-10 w-[200px] bg-white border border-black rounded-sm overflow-hidden">
            {children}
        </ul>
    ) : null;
}
