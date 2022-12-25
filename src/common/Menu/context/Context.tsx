import { createContext } from 'react';

import { IMenuContext } from 'common/Menu/types';

const MenuContext = createContext<IMenuContext | undefined>(undefined);

export default MenuContext;
