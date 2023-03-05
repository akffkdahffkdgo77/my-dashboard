import type { CardTextPropsType } from 'common/Card/CardText/types';

export default function CardText({ text }: CardTextPropsType) {
    return <p className="text-[12px] font-mono">{text}</p>;
}
