type CalendarTasksPropsType = {
    calendar: (number | string)[][];
    currentMonth: number;
    calendarMonth: number;
};

export default function CalendarTasks({ calendar, currentMonth, calendarMonth }: CalendarTasksPropsType) {
    return (
        <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col items-center justify-start">
            <div className="flex w-full items-center justify-between">
                <div className="flex h-10 w-full items-center justify-between text-sm">
                    <div className="min-w-[54px] text-center font-bold">SUN</div>
                    <div className="min-w-[54px] text-center font-bold">MON</div>
                    <div className="min-w-[54px] text-center font-bold">TUE</div>
                    <div className="min-w-[54px] text-center font-bold">WED</div>
                    <div className="min-w-[54px] text-center font-bold">THUR</div>
                    <div className="min-w-[54px] text-center font-bold">FRI</div>
                    <div className="min-w-[54px] text-center font-bold">SAT</div>
                </div>
            </div>
            <div className="flex w-full flex-1 flex-col items-center justify-between">
                {calendar.map((date, idx) => (
                    <div key={idx} className="flex w-full flex-1 items-center justify-center text-base">
                        {date.map((d, index) =>
                            // TODO: 시작일, 종료일로 구분해서 style 설정하기
                            currentMonth === calendarMonth + 1 && [22, 23, 24].includes(Number(d)) ? (
                                <div key={index} className="visible h-[52px] w-[54px]">
                                    <div className="flex h-full w-full items-center justify-center">
                                        <div className={`${d === 22 ? 'ml-[50%] w-1/2' : d === 24 ? 'mr-[50%] w-1/2' : 'w-full'}  h-[15px] bg-black text-xs`} />
                                    </div>
                                </div>
                            ) : (
                                <div key={index} className="invisible h-[52px] w-[54px]">
                                    <div className="flex h-10 w-10 items-center justify-center">
                                        <div className="h-[15px] w-full bg-black text-xs" />
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
