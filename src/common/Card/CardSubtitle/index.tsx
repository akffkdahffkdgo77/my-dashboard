import { ICardSubtitle } from 'common/Card/CardSubtitle/types';

export default function CardSubtitle({ subtitle }: ICardSubtitle) {
    return <small>{subtitle}</small>;
}
