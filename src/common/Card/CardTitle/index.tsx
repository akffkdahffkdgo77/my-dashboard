interface ICardTitle {
    title: string;
}

export default function CardTitle({ title }: ICardTitle) {
    return <h4 className="font-bold">{title}</h4>;
}
