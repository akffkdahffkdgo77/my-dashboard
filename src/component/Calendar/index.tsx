import { useState } from 'react';

import useCalendar from 'hooks/calendar/useCalendar';

import { CalendarContainer, CalendarNavigation, CalendarTable, CalendarTasks } from 'common';
import { calculateMonth, calculateYear, createCalendar, getDates } from 'utils';

const CURRENT_MONTH = new Date().getMonth() + 1;
const CURRENT_DATE = new Date().getDate();

export default function Calendar() {
    const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
    const [current, setCurrent] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' }));

    const [calendar, setCalendar] = useCalendar();

    const handleMonth = (type: string) => {
        const curMonth = calculateMonth({ month: calendarMonth, type });
        const curYear = calculateYear({ curMonth, today: current, type });
        const { firstDay, lastDate } = getDates(curMonth);

        setCalendar(createCalendar({ length: lastDate, startOfMonth: firstDay }));
        setCalendarMonth(curMonth);
        setCurrent(new Date(`${curYear}-${curMonth + 1}-01`).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }));
    };

    return (
        <div className="w-full h-full flex flex-col items-start justify-start">
            <CalendarNavigation current={current} handleMonth={handleMonth} />
            <CalendarContainer>
                <CalendarTable calendar={calendar} currentDate={CURRENT_DATE} currentMonth={CURRENT_MONTH} calendarMonth={calendarMonth} />
                <CalendarTasks calendar={calendar} currentMonth={CURRENT_MONTH} calendarMonth={calendarMonth} />
            </CalendarContainer>
        </div>
    );
}
