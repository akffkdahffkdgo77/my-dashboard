import { TabPanel } from 'common';
import CardList from 'component/CardList';

interface IStudyPanel {
    selected: boolean;
}

export default function StudyPanel({ selected }: IStudyPanel) {
    return (
        <TabPanel index={2} selected={selected}>
            <h3 className="text-[16px] font-mono font-bold mb-2.5">2022 Studies</h3>
            <CardList />
        </TabPanel>
    );
}
