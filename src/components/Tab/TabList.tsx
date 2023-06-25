type TabListPropsType = {
    children: React.ReactNode;
};

/**
 *  TabList
 *  A set of tab elements contained in a tablist element.
 */
export default function TabList({ children }: TabListPropsType) {
    return (
        <div className="sticky top-[120px] mb-5 flex h-10 items-center gap-5 bg-white uppercase leading-10" role="tablist" aria-label="navigation">
            {children}
        </div>
    );
}
