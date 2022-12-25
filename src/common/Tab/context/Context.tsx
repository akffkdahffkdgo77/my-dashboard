import { createContext } from 'react';

import { ITabContext } from 'common/Tab/types';

const TabContext = createContext<ITabContext | undefined>(undefined);

export default TabContext;
