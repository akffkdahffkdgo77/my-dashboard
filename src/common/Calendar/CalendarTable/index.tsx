interface ICalendarTable {
    calendar: (number | string)[][];
    currentDate: number;
    currentMonth: number;
    calendarMonth: number;
}

export default function CalendarTable({ calendar, currentDate, currentMonth, calendarMonth }: ICalendarTable) {
    return (
        <table className="absolute top-0 right-0 left-0 bottom-0  z-50 w-full h-full border-collapse">
            <thead>
                <tr className="h-10 text-sm">
                    <th>SUN</th>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THUR</th>
                    <th>FRI</th>
                    <th>SAT</th>
                </tr>
            </thead>
            <tbody>
                {calendar.map((date, idx) => (
                    <tr key={idx} className="text-base">
                        {date.map((d, index) => (
                            <td key={index} className="">
                                <div className="w-10 h-10 flex justify-center items-center">
                                    <span
                                        className={
                                            currentMonth === calendarMonth + 1 && (d === currentDate || [22, 23, 24].includes(+d || 1))
                                                ? 'text-xs leading-6 rounded-full w-6 h-6 text-center bg-white border-black border font-bold'
                                                : d
                                                ? 'text-xs leading-6 rounded-full w-6 h-6  text-center'
                                                : ''
                                        }
                                    >
                                        {d}
                                    </span>
                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
