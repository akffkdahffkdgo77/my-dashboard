import React, { createRef, useCallback, useEffect, useMemo, useState } from 'react';

import MenuButtonContext from 'common/Menu/context/Context';
import { IMenuButtonContext, IMenuButtonProvider } from 'common/Menu/types';

type TabIndexType = {
    linkRefs: React.RefObject<HTMLAnchorElement>[];
    tabIndex: number;
};

export const changeTabIndex = ({ linkRefs, tabIndex }: TabIndexType) => {
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

export default function MenuButtonProvider({ children }: IMenuButtonProvider) {
    const [isVisible, setIsVisible] = useState(false);
    const [key, setKey] = useState('');

    const linkRefs = Array.from({ length: 2 }).map(() => createRef<HTMLAnchorElement>());

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
            setKey('');
        } else if (isVisible && key === 'ArrowDown') {
            const link = linkRefs[linkRefs.length - 1].current as HTMLAnchorElement;
            link.focus();
            link.tabIndex = 0;
            changeTabIndex({ linkRefs, tabIndex: -1 });
            setKey('');
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
    const onMouseEnter = useCallback(() => linkRefs.forEach((ref) => ref.current?.blur()), [linkRefs]);

    // When leave Menu List -> Focus First Element
    const onMouseLeave = useCallback(() => {
        if (linkRefs[0].current && isVisible) {
            linkRefs[0].current.focus();
            linkRefs[0].current.tabIndex = 0;
            changeTabIndex({ linkRefs, tabIndex: 0 });
        }
    }, [isVisible, linkRefs]);

    const value: IMenuButtonContext = useMemo(() => ({ isVisible, setIsVisible, linkRefs, onClick, onKeyDown, onMouseEnter, onMouseLeave }), [isVisible, linkRefs, onMouseEnter, onMouseLeave]);

    return <MenuButtonContext.Provider value={value}>{children}</MenuButtonContext.Provider>;
}
