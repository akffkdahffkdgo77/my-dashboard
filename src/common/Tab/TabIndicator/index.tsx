import { ITabIndicator } from 'common/Tab/TabIndicator/types';

export default function TabIndicator({ selected }: ITabIndicator) {
    return <div className={`${selected ? 'visible' : 'invisible'} transition-all w-3/4 h-[2px] bg-black mx-auto`} />;
}
