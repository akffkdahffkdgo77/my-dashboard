import { useContext } from 'react';

import MenuContext from 'common/Menu/MenuContext/Context';
import { IMenuListItem } from 'common/Menu/MenuListItem/types';

export default function MenuListItem({ children }: IMenuListItem) {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error('Should be used within a `Menu Provider`');
    }

    const { onMouseEnter } = context;

    return (
        <li role="none" onMouseEnter={onMouseEnter} className="w-full h-full">
            {children}
        </li>
    );
}
