import { useState } from 'react';

import { Tabs, TabIndicator, TabItem, TabList, TabPanel } from '@components';

import CardList from './CardList';
import DailyCommits from './DailyCommits';
import MonthlyCommits from './MonthlyCommits';
import Projects from './Projects';
import Skills from './Skills';
import WeeklyCloneCoding from './WeeklyCloneCoding';
import WeeklyCommits from './WeeklyCommits';

export default function Home() {
    const [isSelected, setIsSelected] = useState(1);

    const handleClick = (index: number) => setIsSelected(index);

    return (
        <Tabs>
            <TabList>
                <TabItem index={1} isSelected={isSelected === 1} onClick={handleClick}>
                    <h2 className={`${isSelected === 1 ? 'font-bold ' : 'font-medium'} font-mono text-[16px]`}>Overview</h2>
                    <TabIndicator isSelected={isSelected === 1} />
                </TabItem>
                <TabItem index={2} isSelected={isSelected === 2} onClick={handleClick}>
                    <h2 className={`${isSelected === 2 ? 'font-bold ' : 'font-medium'} font-mono text-[16px]`}>Studies</h2>
                    <TabIndicator isSelected={isSelected === 2} />
                </TabItem>
            </TabList>
            <TabPanel index={1} isSelected={isSelected === 1}>
                <MonthlyCommits />
                <div className="flex justify-between gap-x-2.5">
                    <WeeklyCommits />
                    <DailyCommits />
                    <Skills />
                </div>
                <div className="flex gap-x-2.5">
                    <Projects />
                    <WeeklyCloneCoding />
                </div>
            </TabPanel>
            <TabPanel index={2} isSelected={isSelected === 2}>
                <h3 className="mb-2.5 font-mono text-[16px] font-bold">2022 Studies</h3>
                <CardList />
            </TabPanel>
        </Tabs>
    );
}
