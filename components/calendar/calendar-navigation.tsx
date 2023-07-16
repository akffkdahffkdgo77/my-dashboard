import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type CalendarNavigationPropsType = {
    current: string;
    onMonthChange: (type: string) => void;
};

export default function CalendarNavigation({ current, onMonthChange }: CalendarNavigationPropsType) {
    return (
        <div className="mx-auto mb-5 flex h-12 w-full max-w-[336px] items-center justify-between px-2.5">
            <button aria-label="previous month" title="이전 달" type="button" onClick={() => onMonthChange('prev')}>
                <ChevronLeftIcon className="mx-2 h-5 w-5" />
            </button>
            <h2 className="font-mono text-lg font-bold">{current}</h2>
            <button aria-label="next month" title="다음 달" type="button" onClick={() => onMonthChange('next')}>
                <ChevronRightIcon className="mx-2 h-5 w-5" />
            </button>
        </div>
    );
}
