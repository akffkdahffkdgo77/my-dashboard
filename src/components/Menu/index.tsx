import { Link } from 'react-router-dom';

import { MenuButton, MenuList, MenuListItem, useMenu } from 'common/Menu';

export default function Menu() {
    const { linkRefs } = useMenu();

    return (
        <>
            <MenuButton>N</MenuButton>
            <MenuList>
                <MenuListItem>
                    <Link
                        tabIndex={0}
                        role="menuitem"
                        to="/"
                        ref={linkRefs[0]}
                        className="w-full block border-b border-black h-10 leading-10 px-5 focus:bg-black focus:text-white hover:bg-black hover:text-white last-of-type:border-none"
                    >
                        My Page
                    </Link>
                </MenuListItem>
                <MenuListItem>
                    <Link
                        tabIndex={-1}
                        role="menuitem"
                        to="/"
                        ref={linkRefs[1]}
                        className="w-full block border-b border-black h-10 leading-10 px-5 focus:bg-black focus:text-white hover:bg-black hover:text-white last-of-type:border-none"
                    >
                        Sign Out
                    </Link>
                </MenuListItem>
            </MenuList>
        </>
    );
}
