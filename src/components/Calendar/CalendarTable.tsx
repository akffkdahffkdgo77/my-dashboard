type CalendarTablePropsType = {
    calendar: (number | string)[][];
    currentDate: number;
    currentMonth: number;
    calendarMonth: number;
};

export default function CalendarTable({ calendar, currentDate, currentMonth, calendarMonth }: CalendarTablePropsType) {
    return (
        <table className="absolute bottom-0 left-0 right-0 top-0  z-50 h-full w-full border-collapse">
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
                                <div className="mx-auto flex h-10 w-10 items-center justify-center">
                                    <span
                                        className={
                                            currentMonth === calendarMonth + 1 && (d === currentDate || [22, 23, 24].includes(+d || 1))
                                                ? 'h-6 w-6 rounded-full border border-black bg-white text-center text-xs font-bold leading-6'
                                                : d
                                                ? 'h-6 w-6 rounded-full text-center text-xs  leading-6'
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
