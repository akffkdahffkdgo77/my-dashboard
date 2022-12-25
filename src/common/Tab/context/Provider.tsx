import { createRef, useEffect, useMemo } from 'react';

import TabContext from 'common/Tab/context/Context';
import { ITabContext, ITabProvider } from 'common/Tab/types';

export default function TabProvider({ children }: ITabProvider) {
    const linkRefs = Array.from({ length: 2 }).map(() => createRef<HTMLButtonElement>());

    // Add Keyboard Event Listener
    useEffect(() => {
        const onKeyMove = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                linkRefs.forEach((ref, index) => {
                    const tabPabel = document.getElementById(`tabpanel-${index + 1}`);
                    if (ref.current?.tabIndex) {
                        ref.current.focus();
                        ref.current.ariaSelected = 'true';
                        ref.current.tabIndex = 0;
                        tabPabel!.className = 'block';
                    } else if (ref.current) {
                        ref.current.blur();
                        ref.current.tabIndex = -1;
                        ref.current.ariaSelected = 'false';
                        tabPabel!.className = 'hidden';
                    }
                });
            }
        };

        window.addEventListener('keydown', onKeyMove, true);
        return () => window.removeEventListener('keydown', onKeyMove, true);
    }, [linkRefs]);

    const value: ITabContext = useMemo(() => ({ linkRefs }), [linkRefs]);

    return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}