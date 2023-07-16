'use client';

import { useState } from 'react';

import { CalendarContainer, CalendarNavigation, CalendarTable, CalendarTasks } from '@components';
import { calculateMonth, calculateYear, createCalendar, getDates } from '@components/calendar';

import useCalendar from './useCalendar';

export type Task = { title: string; idx: number; description: string };
export type AppointmentType = { startDate: string; endDate: string };

export default function Calendar() {
    const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
    const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
    const [current, setCurrent] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' }));
    const [calendar, setCalendar] = useCalendar();
    const [appointments] = useState<AppointmentType[]>([
        { startDate: '2023.07.22', endDate: '2023.07.24' },
        { startDate: '2023.08.01', endDate: '2023.08.03' }
    ]);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedDate, setSelectedDate] = useState('');

    const handleMonth = (type: string) => {
        const curMonth = calculateMonth({ month: calendarMonth, type });
        const curYear = calculateYear({ curMonth, today: current, type });
        const { firstDay, lastDate } = getDates(curMonth);

        setCalendar(createCalendar({ length: lastDate, startOfMonth: firstDay }));
        setCalendarYear(curYear);
        setCalendarMonth(curMonth);
        setCurrent(new Date(`${curYear}-${curMonth + 1}-01`).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }));
    };

    const handleTasks = (month: number, day: number) => {
        setSelectedDate(String(day));

        if (month % 2 === 0) {
            if (day % 2 === 0) {
                setTasks([
                    { title: 'Lorem ipsum', idx: 1, description: 'Meeting with Lorem ipsum...' },
                    { title: '뉴진스', idx: 2, description: 'Super Shy' },
                    { title: '세븐틴', idx: 3, description: '손오공' },
                    { title: 'IVE', idx: 4, description: 'I AM' }
                ]);
            } else {
                setTasks([
                    { title: 'Lorem ipsum', idx: 1, description: 'Meeting with Lorem ipsum...' },
                    { title: '장미', idx: 2, description: '빨간색' },
                    { title: '국화', idx: 3, description: '노란색' },
                    { title: '수국', idx: 4, description: '파란색' }
                ]);
            }
        } else if (day % 2 === 0) {
            setTasks([
                { title: 'Lorem ipsum', idx: 1, description: 'Meeting with Lorem ipsum...' },
                { title: 'I', idx: 2, description: '하나' },
                { title: 'II', idx: 3, description: '둘' },
                { title: 'III', idx: 4, description: '셋' }
            ]);
        } else {
            setTasks([
                { title: 'Lorem ipsum', idx: 1, description: 'Meeting with Lorem ipsum...' },
                { title: '하나', idx: 2, description: 'One' },
                { title: '둘', idx: 3, description: 'Two' },
                { title: '셋', idx: 4, description: 'Three' }
            ]);
        }
    };

    return (
        <div className="flex h-full w-full flex-col items-start justify-start">
            <CalendarNavigation current={current} onMonthChange={handleMonth} />
            <CalendarContainer>
                <CalendarTable appointments={appointments} selectedDate={selectedDate} calendar={calendar} calendarYear={calendarYear} calendarMonth={calendarMonth} onClick={handleTasks} />
            </CalendarContainer>
            <CalendarTasks taskList={tasks} />
        </div>
    );
}
