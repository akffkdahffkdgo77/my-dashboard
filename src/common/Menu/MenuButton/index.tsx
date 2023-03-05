import useMenu from 'common/Menu/MenuContext/useMenu';

import type { MenuButtonPropsType } from 'common/Menu/MenuButton/types';

export default function MenuButton({ children }: MenuButtonPropsType) {
    const { isVisible, onClick, onKeyDown } = useMenu();

    return (
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
            {children}
        </button>
    );
}
