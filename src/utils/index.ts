/* eslint-disable import/prefer-default-export */
export const getDates = (curMonth: number) => {
    const curDate = new Date();
    curDate.setMonth(curMonth);
    curDate.setDate(1);
    const firstDay = curDate.getDay();

    curDate.setMonth(curMonth + 1);
    curDate.setDate(0);

    const lastDay = curDate.getDay();
    const lastDate = curDate.getDate();

    return { curDate, firstDay, lastDay, lastDate };
};

type CalculateMonthType = {
    month: number;
    type: string;
};

export const calculateMonth = ({ month, type }: CalculateMonthType) => {
    let curMonth = month;
    if (type === 'prev') {
        curMonth = month === 0 ? 11 : month - 1;
    } else {
        curMonth = month === 11 ? 0 : month + 1;
    }

    return curMonth;
};

type CalculateYearType = {
    curMonth: number;
    today: string;
    type: string;
};
export const calculateYear = ({ curMonth, today, type }: CalculateYearType) => {
    let curYear = new Date(today).getFullYear();
    if (curMonth === 0 && type === 'next') {
        curYear = new Date(today).getFullYear() + 1;
    } else if (curMonth === 11 && type === 'prev') {
        curYear = new Date(today).getFullYear() - 1;
    }

    return curYear;
};
