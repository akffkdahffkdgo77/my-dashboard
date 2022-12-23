import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { Button, MenuButtonContext, MenuList, MenuListItem } from 'common/Menu';

export default function Menu() {
    const context = useContext(MenuButtonContext);

    if (!context) {
        throw new Error('Should be used within a `MenuButton Provider`');
    }

    const { linkRefs } = context;

    return (
        <>
            <Button>N</Button>
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
