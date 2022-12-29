import { ICardSupportingVisual } from 'common/Card/CardSupportingVisual/types';

export default function CardSupportingVisual({ children }: ICardSupportingVisual) {
    return <div className="border border-black w-10 h-10 flex items-center justify-center rounded-full">{children}</div>;
}
