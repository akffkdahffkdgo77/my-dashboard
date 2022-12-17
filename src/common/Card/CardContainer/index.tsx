interface ICardContainer {
    children: React.ReactNode[];
}
export default function CardContainer({ children }: ICardContainer) {
    return <div className="w-full rounded-sm shadow-md overflow-hidden">{children}</div>;
}
