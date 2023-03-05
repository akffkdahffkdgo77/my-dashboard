import { createContext } from 'react';

import type { MenuContextType } from 'common/Menu/MenuContext/types';

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export default MenuContext;
