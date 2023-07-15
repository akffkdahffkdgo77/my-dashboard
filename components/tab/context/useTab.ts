'use client';

import { useContext } from 'react';

import TabContext from './context';

const useTab = () => {
    const context = useContext(TabContext);

    if (!context) {
        throw new Error('Should be used within `Tab Provider`');
    }

    return context;
};

export default useTab;
