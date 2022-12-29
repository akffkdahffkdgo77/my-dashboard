import { useContext } from 'react';

import { IMenuButton } from 'common/Menu/MenuButton/types';
import MenuContext from 'common/Menu/MenuContext/Context';

export default function MenuButton({ children }: IMenuButton) {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error('Should be used within a `Menu Provider`');
    }

    const { isVisible, onClick, onKeyDown } = context;

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
