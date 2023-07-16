type CalendarContainerPropsType = {
    children: React.ReactNode;
};

export default function CalendarContainer({ children }: CalendarContainerPropsType) {
    return <div className="relative min-h-[300px] w-full">{children}</div>;
}
