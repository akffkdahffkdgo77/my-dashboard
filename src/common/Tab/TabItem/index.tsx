import { useContext } from 'react';

import TabContext from 'common/Tab/context/Context';

interface ITabItem {
    index: number;
    selected?: boolean;
    children: React.ReactNode;
    onClick: (index: number) => void;
}

// An element in the tab list that serves as a label for one of the tab panels and can be activated to display that panel.
export default function TabItem({ index, selected = false, children, onClick }: ITabItem) {
    const args = { id: `tab-${index}`, role: 'tab', 'aria-selected': selected, 'aria-controls': `tabpanel-${index}`, ...(!selected && { tabIndex: -1 }) };

    const context = useContext(TabContext);

    if (!context) {
        throw new Error('Use inside TabProvider');
    }

    const { linkRefs } = context;

    return (
        <button {...args} type="button" ref={linkRefs[index - 1]} onClick={() => onClick(index)}>
            {children}
        </button>
    );
}
