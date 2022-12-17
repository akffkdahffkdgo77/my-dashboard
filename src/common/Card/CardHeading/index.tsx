interface ICardHeading {
    children: React.ReactNode[];
}

export default function CardHeading({ children }: ICardHeading) {
    return <div className="flex flex-col">{children}</div>;
}
