type CardTextPropsType = {
    text: string;
};

export default function CardText({ text }: CardTextPropsType) {
    return <p className="font-mono text-[12px]">{text}</p>;
}
