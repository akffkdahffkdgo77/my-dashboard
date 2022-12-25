export interface IMenuContext {
    linkRefs: React.RefObject<HTMLAnchorElement>[];
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    onClick: (e: React.MouseEvent) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
    onMouseEnter: () => void;
    onMouseLeave: (e: React.MouseEvent) => void;
}

export interface IMenuProvider {
    children: React.ReactNode;
}

export type TabIndexType = {
    linkRefs: React.RefObject<HTMLAnchorElement>[];
    tabIndex: number;
};

export interface IButton {
    children: React.ReactNode;
}

export interface IMenuList {
    children: React.ReactNode | React.ReactNode[];
}

export interface IMenuListItem {
    children: React.ReactNode | React.ReactNode[];
}
