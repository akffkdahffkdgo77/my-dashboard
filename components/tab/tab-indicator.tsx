type TabIndicatorPropsType = {
    isSelected: boolean;
};

export default function TabIndicator({ isSelected }: TabIndicatorPropsType) {
    return <div className={`${isSelected ? 'visible' : 'invisible'} mx-auto h-[2px] w-3/4 bg-black transition-all`} />;
}
