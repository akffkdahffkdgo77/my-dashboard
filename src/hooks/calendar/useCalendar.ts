/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';

type CalendarType =
    | {
          day: number;
          date: number;
      }
    | {
          day: null;
          date: null;
      };

const useCalendar = (): [CalendarType[][], React.Dispatch<React.SetStateAction<CalendarType[][]>>] => {
    const [calendar, setCalendar] = useState<CalendarType[][]>([]);

    useEffect(() => {
        const today = new Date();
        const curMonth = today.getMonth() + 1;
        const arr = [];
        const dateArr = [];

        const curDate = new Date();
        curDate.setDate(1);
        const firstDay = curDate.getDay();

        curDate.setMonth(curMonth);
        curDate.setDate(0);
        const lastDay = curDate.getDay();
        const lastDate = curDate.getDate();

        const rowNum = Math.ceil((lastDate + firstDay) / 7);

        let day = 1;
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
    }, []);

    return [calendar, setCalendar];
};

export default useCalendar;
