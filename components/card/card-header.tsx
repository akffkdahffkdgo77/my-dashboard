type CardHeaderPropsType = {
    children: React.ReactNode;
};

export default function CardHeader({ children }: CardHeaderPropsType) {
    return <div className="flex h-[72px] items-center gap-x-4 p-4 font-mono">{children}</div>;
}
