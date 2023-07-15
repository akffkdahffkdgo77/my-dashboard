'use client';

import { createContext } from 'react';

import { TabContextType } from './types';

const TabContext = createContext<TabContextType | undefined>(undefined);

export default TabContext;
