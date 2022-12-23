import { useContext } from 'react';

import MenuButtonContext from 'common/Menu/context/Context';
import { IMenuListItem } from 'common/Menu/types';

export default function MenuListItem({ children }: IMenuListItem) {
    const context = useContext(MenuButtonContext);
    if (!context) {
        throw new Error('Not inside MenuButtonContext!');
    }

    const { onMouseEnter } = context;

    return (
        <li role="none" onMouseEnter={onMouseEnter} className="w-full h-full">
            {children}
        </li>
    );
}
