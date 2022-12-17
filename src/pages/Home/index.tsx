import { useState } from 'react';

import { Tab, TabPanel } from 'common';
import { TabItemsList, OverviewPanel, StudyPanel } from 'components';

export default function Home() {
    const [selected, setSelected] = useState(1);

    const onClick = (index: number) => setSelected(index);

    return (
        <>
            <Tab>
                <TabItemsList selected={selected} onClick={onClick} />
                <OverviewPanel selected={selected === 1} />
                <StudyPanel selected={selected === 2} />
                <TabPanel index={3} selected={selected === 3}>
                    <p>
                        Ida Henriette da Fonseca (July 27, 1802 – July 6, 1858) was a Danish opera singer and composer. Ida Henriette da Fonseca was the daughter of Abraham da Fonseca (1776–1849) and
                        Marie Sofie Kiærskou (1784–1863). She and her sister Emilie da Fonseca were students of Giuseppe Siboni, choir master of the Opera in Copenhagen. She was given a place at the
                        royal Opera alongside her sister the same year she debuted in 1827.
                    </p>
                </TabPanel>
                <TabPanel index={4} selected={selected === 4}>
                    <p>
                        Peter Erasmus Lange-Müller (1 December 1850 – 26 February 1926) was a Danish composer and pianist. His compositional style was influenced by Danish folk music and by the work
                        of Robert Schumann; Johannes Brahms; and his Danish countrymen, including J.P.E. Hartmann.
                    </p>
                </TabPanel>
            </Tab>
        </>
    );
}
