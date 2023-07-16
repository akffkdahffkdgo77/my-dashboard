type CardContainerPropsType = {
    children: React.ReactNode;
};

export default function CardContainer({ children }: CardContainerPropsType) {
    return <div className="w-full overflow-hidden rounded-sm shadow-md">{children}</div>;
}
