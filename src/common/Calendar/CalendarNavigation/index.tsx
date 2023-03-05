import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { CalendarNavigationPropsType } from 'common/Calendar/CalendarNavigation/types';

export default function CalendarNavigation({ current, onMonthChange }: CalendarNavigationPropsType) {
    return (
        <div className="w-full h-[48px] px-2.5 flex items-center justify-between">
            <h2 className="text-lg font-bold font-mono">{current}</h2>
            <div>
                <button aria-label="previous month" title="이전 달" type="button" onClick={() => onMonthChange('prev')}>
                    <FontAwesomeIcon className="text-lg mx-2" icon={faChevronCircleLeft} />
                </button>
                <button aria-label="next month" title="다음 달" type="button" onClick={() => onMonthChange('next')}>
                    <FontAwesomeIcon className="text-lg mx-2" icon={faChevronCircleRight} />
                </button>
            </div>
        </div>
    );
}
