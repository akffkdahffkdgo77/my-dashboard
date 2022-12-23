import { createContext } from 'react';

import { IMenuButtonContext } from 'common/Menu/types';

const MenuButtonContext = createContext<IMenuButtonContext | undefined>(undefined);

export default MenuButtonContext;
