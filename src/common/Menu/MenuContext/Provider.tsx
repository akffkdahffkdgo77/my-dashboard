import React, { createRef, useCallback, useEffect, useMemo, useState } from 'react';

import MenuContext from 'common/Menu/MenuContext/Context';

import type { MenuContextType, MenuProviderPropsType, TabIndexType } from 'common/Menu/MenuContext/types';

export const changeTabIndex = ({ linkRefs, tabIndex }: TabIndexType) => {
    if (tabIndex) {
        const rest = linkRefs.slice(0, linkRefs.length);
        rest.pop();
        rest.forEach((ref) => {
            ref.current!.tabIndex = -1;
        });
    } else {
        const rest = linkRefs.slice(1, linkRefs.length);
        rest.forEach((ref) => {
            ref.current!.tabIndex = -1;
        });
    }
};

export default function MenuProvider({ children }: MenuProviderPropsType) {
    const [isVisible, setIsVisible] = useState(false);
    const [key, setKey] = useState('');

    const linkRefs = Array.from({ length: 2 }).map(() => createRef<HTMLAnchorElement>());

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsVisible(false);
            } else if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && !isVisible) {
                setIsVisible(true);
                setKey(event.key);
                document.body.style.overflow = 'hidden';
            } else if (isVisible && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
                linkRefs.forEach((ref) => {
                    if (ref.current?.tabIndex) {
                        ref.current.focus();
                        ref.current.tabIndex = 0;
                    } else if (ref.current && ref.current.tabIndex === 0) {
                        ref.current.blur();
                        ref.current.tabIndex = -1;
                    }
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown, true);
        return () => window.removeEventListener('keydown', handleKeyDown, true);
    }, [isVisible, linkRefs]);

    /**
     *  Menu Button
     *  Keyboard Support
     *  Down Arrow, Space, Enter -> Opens menu and moves focus to first menuitem
     *  Up Arrow -> Opens menu and moves focus to last menuitem
     */
    const handleKeyMove = useCallback(() => {
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

    useEffect(() => {
        handleKeyMove();
    }, [handleKeyMove]);

    /**
     *  Menu Button
     *  When clicks menu button
     */
    const handleButtonClick = useCallback(() => setIsVisible((prev) => !prev), []);

    /**
     *  Menu Button
     *  When press key while focused on Menu Button
     */
    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (e.key === 'Enter' || e.code === 'Space') {
            document.body.style.overflow = 'hidden';
            setIsVisible((prev) => !prev);
            setKey(e.key === 'Enter' ? 'Enter' : 'Space');
        }
    }, []);

    /**
     *  Menu
     *  Remove focus
     */
    const handleMouseEnter = useCallback(() => linkRefs.forEach((ref) => ref.current?.blur()), [linkRefs]);

    /**
     *  Menu List
     *  When leave Menu List -> Focus First Element
     */
    const handleMouseLeave = useCallback(() => {
        if (linkRefs[0].current && isVisible) {
            linkRefs[0].current.focus();
            linkRefs[0].current.tabIndex = 0;
            changeTabIndex({ linkRefs, tabIndex: 0 });
        }
    }, [isVisible, linkRefs]);

    useEffect(() => {
        if (!isVisible) {
            document.body.style.overflow = 'auto';
        }
    }, [isVisible]);

    const value: MenuContextType = useMemo(
        () => ({
            isVisible,
            setIsVisible,
            linkRefs,
            onClick: handleButtonClick,
            onKeyDown: handleKeyDown,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave
        }),
        [isVisible, linkRefs, handleButtonClick, handleKeyDown, handleMouseEnter, handleMouseLeave]
    );

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
