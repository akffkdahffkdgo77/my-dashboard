import { useState } from 'react';

import { Tab } from 'common';
import { TabItemsList, OverviewPanel, StudyPanel } from 'pages/Home/components';

export default function Home() {
    const [selected, setSelected] = useState(1);

    const handleClick = (index: number) => setSelected(index);

    return (
        <Tab>
            <TabItemsList isSelected={selected} onClick={handleClick} />
            <OverviewPanel isSelected={selected === 1} />
            <StudyPanel isSelected={selected === 2} />
        </Tab>
    );
}
