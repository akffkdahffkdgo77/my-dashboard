import { ICardHeading } from 'common/Card/CardHeading/types';

export default function CardHeading({ children }: ICardHeading) {
    return <div className="flex flex-col">{children}</div>;
}
