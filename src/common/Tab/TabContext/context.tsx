import { createContext } from 'react';

import { ITabContext } from 'common/Tab/TabContext/types';

const TabContext = createContext<ITabContext | undefined>(undefined);

export default TabContext;
