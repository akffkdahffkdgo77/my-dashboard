import { ITabPanel } from 'common/Tab/TabPanel/types';

// The element that contains the content associated with a tab.
export default function TabPanel({ index, selected = false, children }: ITabPanel) {
    return (
        <div id={`tabpanel-${index}`} role="tabpanel" tabIndex={0} aria-labelledby={`tab-${index}`} className={selected ? 'block' : 'hidden'}>
            {children}
        </div>
    );
}
