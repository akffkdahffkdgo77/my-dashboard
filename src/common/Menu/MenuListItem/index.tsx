import useMenu from 'common/Menu/MenuContext/useMenu';

import type { MenuListItemPropsType } from 'common/Menu/MenuListItem/types';

export default function MenuListItem({ children }: MenuListItemPropsType) {
    const { onMouseEnter } = useMenu();

    return (
        <li role="none" onMouseEnter={onMouseEnter} className="w-full h-full">
            {children}
        </li>
    );
}
