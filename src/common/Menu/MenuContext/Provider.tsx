import React, { createRef, useCallback, useEffect, useMemo, useState } from 'react';

import MenuContext from 'common/Menu/MenuContext/Context';
import { IMenuContext, IMenuProvider, TabIndexType } from 'common/Menu/MenuContext/types';

export const changeTabIndex = ({ linkRefs, tabIndex }: TabIndexType) => {
    if (tabIndex) {
        const rest = linkRefs.slice(0, linkRefs.length);
        rest.pop();
        rest.forEach((ref) => (ref.current!.tabIndex = -1));
    } else {
        const rest = linkRefs.slice(1, linkRefs.length);
        rest.forEach((ref) => (ref.current!.tabIndex = -1));
    }
};

export default function MenuProvider({ children }: IMenuProvider) {
    const [isVisible, setIsVisible] = useState(false);
    const [key, setKey] = useState('');

    const linkRefs = Array.from({ length: 2 }).map(() => createRef<HTMLAnchorElement>());

    useEffect(() => {
        const onKeyMove = (event: KeyboardEvent) => {
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
            document.body.style.overflow = 'hidden';
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

    useEffect(() => {
        if (!isVisible) {
            document.body.style.overflow = 'auto';
        }
    }, [isVisible]);

    const value: IMenuContext = useMemo(() => ({ isVisible, setIsVisible, linkRefs, onClick, onKeyDown, onMouseEnter, onMouseLeave }), [isVisible, linkRefs, onMouseEnter, onMouseLeave]);

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
