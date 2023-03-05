import { createContext } from 'react';

import { TabContextType } from 'common/Tab/TabContext/types';

const TabContext = createContext<TabContextType | undefined>(undefined);

export default TabContext;
