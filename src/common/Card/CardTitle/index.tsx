import { ICardTitle } from 'common/Card/CardTitle/types';

export default function CardTitle({ title }: ICardTitle) {
    return <h4 className="font-bold">{title}</h4>;
}
