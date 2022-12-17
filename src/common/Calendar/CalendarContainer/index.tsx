import React from 'react';

interface ICalendarContainer {
    children: React.ReactNode[];
}

export default function CalendarContainer({ children }: ICalendarContainer) {
    return <div className="relative w-full min-h-[300px]">{children}</div>;
}
