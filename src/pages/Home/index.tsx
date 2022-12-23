import { useState } from 'react';

import { Tab } from 'common';
import { TabItemsList, OverviewPanel, StudyPanel } from 'pages/Home/components';

export default function Home() {
    const [selected, setSelected] = useState(1);

    const onClick = (index: number) => setSelected(index);

    return (
        <>
            <Tab>
                <TabItemsList selected={selected} onClick={onClick} />
                <OverviewPanel selected={selected === 1} />
                <StudyPanel selected={selected === 2} />
            </Tab>
        </>
    );
}
