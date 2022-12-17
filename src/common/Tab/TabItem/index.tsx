interface ITabItem {
    index: number;
    selected?: boolean;
    children: React.ReactNode;
    onClick: (index: number) => void;
}

// An element in the tab list that serves as a label for one of the tab panels and can be activated to display that panel.
export default function TabItem({ index, selected = false, children, onClick }: ITabItem) {
    return (
        <button onClick={() => onClick(index)} id={`tab-${index}`} type="button" role="tab" aria-selected={selected} aria-controls={`tabpanel-${index}`}>
            {children}
        </button>
    );
}
