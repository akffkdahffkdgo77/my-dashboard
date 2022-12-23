import { useContext } from 'react';

import MenuButtonContext from 'common/Menu/context/Context';
import { IButton } from 'common/Menu/types';

export default function Button({ children }: IButton) {
    const context = useContext(MenuButtonContext);
    if (!context) {
        throw new Error('');
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
