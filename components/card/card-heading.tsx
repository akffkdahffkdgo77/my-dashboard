type CardHeadingPropsType = {
    children: React.ReactNode;
};

export default function CardHeading({ children }: CardHeadingPropsType) {
    return <div className="flex flex-col">{children}</div>;
}
