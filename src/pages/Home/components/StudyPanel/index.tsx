import { TabPanel } from 'common';
import { CardList } from 'components';

import type { StudyPanelPropsType } from 'pages/Home/components/StudyPanel/types';

export default function StudyPanel({ isSelected }: StudyPanelPropsType) {
    return (
        <TabPanel index={2} isSelected={isSelected}>
            <h3 className="text-[16px] font-mono font-bold mb-2.5">2022 Studies</h3>
            <CardList />
        </TabPanel>
    );
}
