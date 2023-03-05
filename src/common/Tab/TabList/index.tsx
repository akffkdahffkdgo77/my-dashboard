import type { TabListPropsType } from 'common/Tab/TabList/types';

/**
 *  TabList
 *  A set of tab elements contained in a tablist element.
 */
export default function TabList({ children }: TabListPropsType) {
    return (
        <div className="h-10 leading-10 sticky top-[120px] bg-white flex items-center gap-5 mb-5 uppercase" role="tablist" aria-label="navigation">
            {children}
        </div>
    );
}
