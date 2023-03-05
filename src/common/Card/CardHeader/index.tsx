import type { CardHeaderPropsType } from 'common/Card/CardHeader/types';

export default function CardHeader({ children }: CardHeaderPropsType) {
    return <div className="flex items-center gap-x-4 p-4 font-mono h-[72px]">{children}</div>;
}
