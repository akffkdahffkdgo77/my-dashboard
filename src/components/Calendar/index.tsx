import { useState } from 'react';

import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useCalendar from 'hooks/calendar/useCalendar';

import { calculateMonth, calculateYear, createCalendar, getDates } from 'utils';

export default function Calendar() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [current, setCurrent] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' }));
    const toMonth = new Date().getMonth() + 1;
    const todate = new Date().getDate();

    const [calendar, setCalendar] = useCalendar();

    const handleMonth = (type: string) => {
        const curMonth = calculateMonth({ month, type });
        const curYear = calculateYear({ curMonth, today: current, type });
        const { firstDay, lastDate } = getDates(curMonth);

        setCalendar(createCalendar({ length: lastDate, startOfMonth: firstDay }));
        setMonth(curMonth);
        setCurrent(new Date(`${curYear}-${curMonth + 1}-01`).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }));
    };

    return (
        <div className="w-full h-full flex flex-col items-start justify-start">
            <div className="w-full h-[48px] px-2.5 flex items-center justify-between">
                <h2 className="text-lg font-bold font-mono">{current}</h2>
                <div>
                    <button type="button" onClick={() => handleMonth('prev')}>
                        <FontAwesomeIcon className="text-lg mx-2" icon={faChevronCircleLeft} />
                    </button>
                    <button type="button" onClick={() => handleMonth('next')}>
                        <FontAwesomeIcon className="text-lg mx-2" icon={faChevronCircleRight} />
                    </button>
                </div>
            </div>
            <div className="relative w-full min-h-[300px]">
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
                                                    toMonth === month + 1 && (d === todate || [22, 23, 24].includes(+d || 1))
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
                                    toMonth === month + 1 && d === 22 ? (
                                        <div key={index} className="w-[110px] h-[52px] visible">
                                            <div className="w-full h-full flex justify-center items-center">
                                                <div className="w-full h-[15px] bg-black text-xs" />
                                            </div>
                                        </div>
                                    ) : toMonth === month + 1 && d && d > 22 ? null : (
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
            </div>
        </div>
    );
}
