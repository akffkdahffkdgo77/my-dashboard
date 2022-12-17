interface ICardSubtitle {
    subtitle: string;
}

export default function CardSubtitle({ subtitle }: ICardSubtitle) {
    return <small>{subtitle}</small>;
}
