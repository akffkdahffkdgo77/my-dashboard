import type { TabPanelPropsType } from 'common/Tab/TabPanel/types';

/**
 *  Tab Panel
 *  The element that contains the content associated with a tab.
 */
export default function TabPanel({ index, isSelected = false, children }: TabPanelPropsType) {
    return (
        <div id={`tabpanel-${index}`} role="tabpanel" tabIndex={0} aria-labelledby={`tab-${index}`} className={isSelected ? 'block' : 'hidden'}>
            {children}
        </div>
    );
}
