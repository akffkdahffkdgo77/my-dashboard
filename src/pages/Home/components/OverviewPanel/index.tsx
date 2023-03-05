import { TabPanel } from 'common';
import { DailyCommits, MonthlyCommits, WeeklyCommits, Skills, Projects, WeeklyCloneCoding } from 'components';

import type { OverviewPanelPropsType } from 'pages/Home/components/OverviewPanel/types';

export default function OverviewPanel({ isSelected }: OverviewPanelPropsType) {
    return (
        <TabPanel index={1} isSelected={isSelected}>
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
