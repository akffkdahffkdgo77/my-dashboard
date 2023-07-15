'use client';

import useTab from './context/useTab';

type TabItemPropsType = {
    index: number;
    isSelected?: boolean;
    children: React.ReactNode;
    onClick: (index: number) => void;
};

/**
 *  TabItem
 *  An element in the tab list that serves as a label for one of the tab panels and can be activated to display that panel.
 */
export default function TabItem({ index, isSelected = false, children, onClick }: TabItemPropsType) {
    const args = { id: `tab-${index}`, role: 'tab', 'aria-selected': isSelected, 'aria-controls': `tabpanel-${index}`, ...(!isSelected && { tabIndex: -1 }) };
    const { linkRefs } = useTab();

    return (
        <button {...args} type="button" ref={linkRefs[index - 1]} onClick={() => onClick(index)}>
            {children}
        </button>
    );
}
