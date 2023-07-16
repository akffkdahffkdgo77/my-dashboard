'use client';

import React, { useEffect, useState } from 'react';

import { createCalendar } from '@components/calendar';

type CalendarType = number | string;

const TODAY = new Date();

const useCalendar = (): [CalendarType[][], React.Dispatch<React.SetStateAction<CalendarType[][]>>] => {
    const [calendar, setCalendar] = useState<CalendarType[][]>([]);

    useEffect(() => {
        const curDate = new Date();
        curDate.setDate(1);
        const firstDay = curDate.getDay();
        curDate.setMonth(TODAY.getMonth() + 1);
        curDate.setDate(0);
        const lastDate = curDate.getDate();

        setCalendar(createCalendar({ length: lastDate, startOfMonth: firstDay }));
    }, []);

    return [calendar, setCalendar];
};

export default useCalendar;
