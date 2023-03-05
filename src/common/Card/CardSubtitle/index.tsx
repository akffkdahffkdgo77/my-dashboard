import type { CardSubtitlePropsType } from 'common/Card/CardSubtitle/types';

export default function CardSubtitle({ subtitle }: CardSubtitlePropsType) {
    return <small>{subtitle}</small>;
}
