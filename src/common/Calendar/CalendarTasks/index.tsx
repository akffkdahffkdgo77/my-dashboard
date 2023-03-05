import type { CalendarTasksPropsType } from 'common/Calendar/CalendarTasks/types';

export default function CalendarTasks({ calendar, currentMonth, calendarMonth }: CalendarTasksPropsType) {
    return (
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full flex flex-col justify-start items-center">
            <div className="w-full flex justify-between items-center">
                <div className="w-full flex justify-between items-center h-10 text-sm">
                    <div className="min-w-[54px] text-center font-bold">SUN</div>
                    <div className="min-w-[54px] text-center font-bold">MON</div>
                    <div className="min-w-[54px] text-center font-bold">TUE</div>
                    <div className="min-w-[54px] text-center font-bold">WED</div>
                    <div className="min-w-[54px] text-center font-bold">THUR</div>
                    <div className="min-w-[54px] text-center font-bold">FRI</div>
                    <div className="min-w-[54px] text-center font-bold">SAT</div>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-between w-full flex-col">
                {calendar.map((date, idx) => (
                    <div key={idx} className="flex-1 flex items-center justify-center w-full text-base">
                        {date.map((d, index) =>
                            // TODO: 시작일, 종료일로 구분해서 style 설정하기
                            currentMonth === calendarMonth + 1 && [22, 23, 24].includes(Number(d)) ? (
                                <div key={index} className="w-[54px] h-[52px] visible">
                                    <div className="w-full h-full flex justify-center items-center">
                                        <div className={`${d === 22 ? 'w-1/2 ml-[50%]' : d === 24 ? 'w-1/2 mr-[50%]' : 'w-full'}  h-[15px] bg-black text-xs`} />
                                    </div>
                                </div>
                            ) : (
                                <div key={index} className="w-[54px] h-[52px] invisible">
                                    <div className="w-10 h-10 flex justify-center items-center">
                                        <div className="w-full h-[15px] bg-black text-xs" />
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
