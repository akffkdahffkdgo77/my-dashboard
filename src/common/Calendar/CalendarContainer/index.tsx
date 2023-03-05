import type { CalendarContainerPropsType } from 'common/Calendar/CalendarContainer/types';

export default function CalendarContainer({ children }: CalendarContainerPropsType) {
    return <div className="relative w-full min-h-[300px]">{children}</div>;
}
