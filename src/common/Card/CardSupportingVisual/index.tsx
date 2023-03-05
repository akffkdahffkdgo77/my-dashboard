import type { CardSupportingVisualPropsType } from 'common/Card/CardSupportingVisual/types';

export default function CardSupportingVisual({ children }: CardSupportingVisualPropsType) {
    return <div className="border border-black w-10 h-10 flex items-center justify-center rounded-full">{children}</div>;
}
