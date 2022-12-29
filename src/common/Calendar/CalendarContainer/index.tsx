import { ICalendarContainer } from 'common/Calendar/CalendarContainer/types';

export default function CalendarContainer({ children }: ICalendarContainer) {
    return <div className="relative w-full min-h-[300px]">{children}</div>;
}
