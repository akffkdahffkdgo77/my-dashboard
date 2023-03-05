import { TabIndicator, TabItem, TabList } from 'common';

import type { TabItemsListPropsType } from 'pages/Home/components/TabItemsList/types';

export default function TabItemsList({ isSelected, onClick }: TabItemsListPropsType) {
    return (
        <TabList>
            <TabItem index={1} isSelected={isSelected === 1} onClick={onClick}>
                <h2 className={`${isSelected === 1 ? 'font-bold ' : 'font-medium'} font-mono text-[16px]`}>Overview</h2>
                <TabIndicator isSelected={isSelected === 1} />
            </TabItem>
            <TabItem index={2} isSelected={isSelected === 2} onClick={onClick}>
                <h2 className={`${isSelected === 2 ? 'font-bold ' : 'font-medium'} font-mono text-[16px]`}>Studies</h2>
                <TabIndicator isSelected={isSelected === 2} />
            </TabItem>
        </TabList>
    );
}
