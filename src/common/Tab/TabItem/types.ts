export interface ITabItem {
    index: number;
    selected?: boolean;
    children: React.ReactNode;
    onClick: (index: number) => void;
}
