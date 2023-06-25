type CardTitlePropsType = {
    title: string;
};

export default function CardTitle({ title }: CardTitlePropsType) {
    return <h4 className="font-bold">{title}</h4>;
}
