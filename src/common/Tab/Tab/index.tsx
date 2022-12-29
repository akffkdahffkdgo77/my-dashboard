import { ITab } from 'common/Tab/Tab/types';
import TabProvider from 'common/Tab/TabContext/Provider';

// A set of tab elements and their associated tab panels.
export default function Tab({ children }: ITab) {
    return (
        <TabProvider>
            <div className="mt-5">{children}</div>
        </TabProvider>
    );
}
