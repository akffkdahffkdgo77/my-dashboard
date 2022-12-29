import { ITabList } from 'common/Tab/TabList/types';

// A set of tab elements contained in a tablist element.
export default function TabList({ children }: ITabList) {
    return (
        <div className="h-10 leading-10 sticky top-[120px] bg-white flex items-center gap-5 mb-5 uppercase" role="tablist" aria-label="navigation">
            {children}
        </div>
    );
}
