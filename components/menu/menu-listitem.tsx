'use client';

import useMenu from './context/useMenu';

type MenuListItemPropsType = {
    children: React.ReactNode;
};

export default function MenuListItem({ children }: MenuListItemPropsType) {
    const { onMouseEnter } = useMenu();

    return (
        <li role="none" onMouseEnter={onMouseEnter} className="h-full w-full">
            {children}
        </li>
    );
}
