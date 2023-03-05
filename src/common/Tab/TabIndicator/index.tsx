import type { TabIndicatorPropsType } from 'common/Tab/TabIndicator/types';

export default function TabIndicator({ isSelected }: TabIndicatorPropsType) {
    return <div className={`${isSelected ? 'visible' : 'invisible'} transition-all w-3/4 h-[2px] bg-black mx-auto`} />;
}
