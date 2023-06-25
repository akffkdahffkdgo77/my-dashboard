type CardSupportingVisualPropsType = {
    children: React.ReactNode;
};

export default function CardSupportingVisual({ children }: CardSupportingVisualPropsType) {
    return <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black">{children}</div>;
}
