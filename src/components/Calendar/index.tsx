/* eslint-disable no-plusplus */
import { useState } from 'react';

import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useCalendar from 'hooks/calendar/useCalendar';

import { calculateMonth, calculateYear, getDates } from 'utils';

export default function Calendar() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [current, setCurrent] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' }));
    const toMonth = new Date().getMonth() + 1;
    const todate = new Date().getDate();

    const [calendar, setCalendar] = useCalendar();

    const handleMonth = (type: string) => {
        const arr = [];
        const dateArr = [];

        const today = new Date();
        const curMonth = calculateMonth({ month, type });
        const curYear = calculateYear({ curMonth, today: current, type });
        const { curDate, firstDay, lastDay, lastDate } = getDates(curMonth);

        let day = 1;
        const rowNum = Math.ceil((lastDate + firstDay) / 7);
        // week
        for (let i = 1; i <= rowNum; i++) {
            curDate.setDate(day);
            let firstRowDate = 1;
            // day
            for (let j = 0; j < 7; j++) {
                // first week
                if (i === 1) {
                    if (firstDay === j) {
                        curDate.setDate(curDate.getDate());
                        dateArr.push({ day: j, date: curDate.getDate() });
                    } else if (firstDay < j) {
                        if (j >= 1) {
                            firstRowDate += 1;
                        }
                        curDate.setDate(firstRowDate);
                        dateArr.push({ day: j, date: curDate.getDate() });
                    } else {
                        dateArr.push({ day: null, date: null });
                    }
                } else if (i > 1 && i < rowNum) {
                    if (j > 0) {
                        curDate.setDate(curDate.getDate() + 1);
                    } else {
                        curDate.setDate(curDate.getDate());
                    }
                    dateArr.push({ day: j, date: curDate.getDate() });
                } else if (i === rowNum) {
                    if (j <= lastDay) {
                        if (j > 0) {
                            curDate.setDate(curDate.getDate() + 1);
                        } else {
                            curDate.setDate(curDate.getDate());
                        }
                        dateArr.push({ day: j, date: curDate.getDate() });
                    } else {
                        dateArr.push({ day: null, date: null });
                    }
                }
            }
            arr.push([...dateArr]);
            dateArr.splice(0, dateArr.length);
            day = curDate.getDate() + 1;
        }
        setCalendar(arr);
        setMonth(curMonth);

        today.setMonth(curMonth);
        today.setFullYear(curYear);
        setCurrent(new Date(today).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }));
    };

    return (
        <div className="w-full h-full flex flex-col items-start justify-start">
            <div className="w-full h-[48px] px-5 flex items-center justify-between">
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
                                                    toMonth === month + 1 && (d.date === todate || [22, 23, 24].includes(d.date || 1))
                                                        ? 'text-xs leading-6 rounded-full w-6 h-6 text-center bg-white border-black border font-bold'
                                                        : d.date
                                                        ? 'text-xs leading-6 rounded-full w-6 h-6  text-center'
                                                        : ''
                                                }
                                            >
                                                {d.date}
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
                                    toMonth === month + 1 && d.date === 22 ? (
                                        <div key={index} className="w-[110px] h-[52px] visible">
                                            <div className="w-full h-full flex justify-center items-center">
                                                <div className="w-full h-[15px] bg-black text-xs" />
                                            </div>
                                        </div>
                                    ) : toMonth === month + 1 && d.date && d.date > 22 ? null : (
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
