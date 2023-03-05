import type { CardContainerPropsType } from 'common/Card/CardContainer/types';

export default function CardContainer({ children }: CardContainerPropsType) {
    return <div className="w-full rounded-sm shadow-md overflow-hidden">{children}</div>;
}
