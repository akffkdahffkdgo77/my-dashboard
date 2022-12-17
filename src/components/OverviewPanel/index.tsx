import { TabPanel } from 'common';
import { DailyCommits, MonthlyCommits, WeeklyCommits, Skills, Projects, WeeklyCloneCoding } from 'component';

interface IOverviewPanel {
    selected: boolean;
}

export default function OverviewPanel({ selected }: IOverviewPanel) {
    return (
        <TabPanel index={1} selected={selected}>
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
    );
}
