import { createContext } from 'react';

import type { MenuContextType } from './types';

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export default MenuContext;
