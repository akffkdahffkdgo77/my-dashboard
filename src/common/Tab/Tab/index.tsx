import TabProvider from 'common/Tab/TabContext/Provider';

import type { TabPropsType } from 'common/Tab/Tab/types';

/**
 *  Tab
 *  A set of tab elements and their associated tab panels.
 */
export default function Tab({ children }: TabPropsType) {
    return (
        <TabProvider>
            <div className="mt-5">{children}</div>
        </TabProvider>
    );
}
