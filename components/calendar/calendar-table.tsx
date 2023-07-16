import { AppointmentType } from '@layouts/aside/calendar';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

type CalendarTablePropsType = {
    selectedDate: string;
    calendar: (number | string)[][];
    calendarYear: number;
    calendarMonth: number;
    appointments: AppointmentType[];
    onClick: (month: number, day: number) => void;
};

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

function getFormatDate(date: string) {
    return new Date(date).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

function getRange(appointments: AppointmentType[], date: string) {
    const currentDate = getFormatDate(date);
    const index = appointments.findIndex(({ startDate, endDate }) => {
        const start = getFormatDate(startDate);
        const end = getFormatDate(endDate);
        return start === currentDate || end === currentDate || dayjs(currentDate).isBetween(start, end);
    });
    return index !== -1;
}

export default function CalendarTable({ appointments, selectedDate, calendar, calendarYear, calendarMonth, onClick }: CalendarTablePropsType) {
    return (
        <>
            <table className="absolute bottom-0 left-0 right-0 top-0 z-50 mx-auto h-full border-collapse">
                <thead>
                    <tr className="h-12 text-sm">
                        {DAYS.map((day, index) => (
                            <th key={day} className={index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : ''}>
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {calendar.map((date, idx) => (
                        <tr key={idx} className="h-12 text-base">
                            {date.map((d, index) => (
                                <td key={index} className="w-12">
                                    <div className="flex h-full w-full items-center justify-center">
                                        <button
                                            type="button"
                                            onClick={() => onClick(calendarMonth + 1, Number(d))}
                                            className={`${selectedDate && selectedDate === String(d) ? 'h-6 w-6 rounded-full border border-black' : ''}`}
                                        >
                                            {selectedDate && selectedDate === String(d) ? (
                                                <strong className="block text-center text-xs leading-6">{d}</strong>
                                            ) : (
                                                <p className={`${index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : ''} text-center text-xs leading-6`}>{d}</p>
                                            )}
                                        </button>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="absolute bottom-0 left-0 right-0 top-0 z-0 mx-auto h-[308px] w-[308px] border-collapse border-spacing-0">
                <div className="invisible w-full">
                    <div className="h-12 w-12" />
                </div>
                <div className="flex flex-col items-center">
                    {calendar.map((date, idx) => (
                        <div key={idx} className="flex h-12 items-center">
                            {date.map((d, index) =>
                                d && getRange(appointments, new Date(calendarYear, calendarMonth, Number(d)).toString()) ? (
                                    <div key={index} className="h-full w-12 bg-pink-100" />
                                ) : (
                                    <div key={index} className="invisible h-full w-12" />
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
