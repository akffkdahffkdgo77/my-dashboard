export type MenuContextType = {
    linkRefs: React.RefObject<HTMLAnchorElement>[];
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    onClick: (e: React.MouseEvent) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
    onMouseEnter: () => void;
    onMouseLeave: (e: React.MouseEvent) => void;
};

export type MenuProviderPropsType = {
    children: React.ReactNode;
};

export type TabIndexType = {
    linkRefs: React.RefObject<HTMLAnchorElement>[];
    tabIndex: number;
};
