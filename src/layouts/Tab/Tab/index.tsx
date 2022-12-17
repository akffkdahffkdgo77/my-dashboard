interface ITab {
    children: React.ReactNode[];
}

// A set of tab elements and their associated tab panels.
export default function Tab({ children }: ITab) {
    return <div className="mt-5">{children}</div>;
}
