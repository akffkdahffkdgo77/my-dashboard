import useMenu from '@components/Menu/MenuContext/useMenu';

type MenuButtonPropsType = {
    children: React.ReactNode;
};

export default function MenuButton({ children }: MenuButtonPropsType) {
    const { isVisible, onClick, onKeyDown } = useMenu();

    return (
        <button
            id="menubutton"
            aria-expanded={!isVisible}
            aria-haspopup="true"
            aria-controls="menu"
            type="button"
            onClick={onClick}
            onKeyDown={onKeyDown}
            className="ml-2.5 h-[40px] w-[40px] rounded-full border border-black"
        >
            {children}
        </button>
    );
}
