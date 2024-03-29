type TabPanelPropsType = {
    index: number;
    isSelected?: boolean;
    children: React.ReactNode;
};

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
