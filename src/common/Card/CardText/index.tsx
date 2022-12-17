interface ICardText {
    text: string;
}

export default function CardText({ text }: ICardText) {
    return <p className="text-[12px] font-mono">{text}</p>;
}
