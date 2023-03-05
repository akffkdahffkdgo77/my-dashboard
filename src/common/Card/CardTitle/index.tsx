import type { CardTitlePropsType } from 'common/Card/CardTitle/types';

export default function CardTitle({ title }: CardTitlePropsType) {
    return <h4 className="font-bold">{title}</h4>;
}
