import type { CardHeadingPropsType } from 'common/Card/CardHeading/types';

export default function CardHeading({ children }: CardHeadingPropsType) {
    return <div className="flex flex-col">{children}</div>;
}
