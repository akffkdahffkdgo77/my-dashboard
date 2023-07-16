'use client';

import TabProvider from './context/provider';

type TabPropsType = {
    children: React.ReactNode;
};

/**
 *  Tab
 *  A set of tab elements and their associated tab panels.
 */
export default function Tabs({ children }: TabPropsType) {
    return (
        <TabProvider>
            <div className="mt-5">{children}</div>
        </TabProvider>
    );
}
