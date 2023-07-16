type CardSubtitlePropsType = {
    subtitle: string;
};

export default function CardSubtitle({ subtitle }: CardSubtitlePropsType) {
    return <small>{subtitle}</small>;
}
