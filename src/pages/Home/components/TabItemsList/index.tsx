import { TabIndicator, TabItem, TabList } from 'common';
import { ITabItemsList } from 'pages/Home/components/TabItemsList/types';

export default function TabItemsList({ selected, onClick }: ITabItemsList) {
    return (
        <TabList>
            <TabItem index={1} selected={selected === 1} onClick={onClick}>
                <h2 className={`${selected === 1 ? 'font-bold ' : 'font-medium'} font-mono text-[16px]`}>Overview</h2>
                <TabIndicator selected={selected === 1} />
            </TabItem>
            <TabItem index={2} selected={selected === 2} onClick={onClick}>
                <h2 className={`${selected === 2 ? 'font-bold ' : 'font-medium'} font-mono text-[16px]`}>Studies</h2>
                <TabIndicator selected={selected === 2} />
            </TabItem>
        </TabList>
    );
}
