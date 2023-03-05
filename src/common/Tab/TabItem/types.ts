export type TabItemPropsType = {
    index: number;
    isSelected?: boolean;
    children: React.ReactNode;
    onClick: (index: number) => void;
};
