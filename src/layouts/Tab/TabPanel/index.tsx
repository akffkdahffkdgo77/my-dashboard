interface ITabPanel {
    index: number;
    selected?: boolean;
    children: React.ReactNode;
}

// The element that contains the content associated with a tab.
export default function TabPanel({ index, selected = false, children }: ITabPanel) {
    return (
        <div className={selected ? 'block' : 'hidden'} id={`tabpanel-${index}`} role="tabpanel" tabIndex={selected ? 0 : -1} aria-labelledby={`tab-${index}`}>
            {children}
        </div>
    );
}
