'use client';

import { useContext } from 'react';

import MenuContext from './context';

const useMenu = () => {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error('Should be used within `Menu Provider`');
    }

    return context;
};

export default useMenu;
