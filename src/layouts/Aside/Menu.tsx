import { Link } from 'react-router-dom';

import { MenuButton, MenuList, MenuListItem, useMenu } from '@components/Menu';

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
                        className="block h-10 w-full border-b border-black px-5 leading-10 last-of-type:border-none hover:bg-black hover:text-white focus:bg-black focus:text-white"
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
                        className="block h-10 w-full border-b border-black px-5 leading-10 last-of-type:border-none hover:bg-black hover:text-white focus:bg-black focus:text-white"
                    >
                        Sign Out
                    </Link>
                </MenuListItem>
            </MenuList>
        </>
    );
}
