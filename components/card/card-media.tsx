type CardMediaPropsType = {
    image: string;
};

export default function CardMedia({ image }: CardMediaPropsType) {
    return (
        <div className="h-[194px] w-full">
            <img width={344} height={194} className="h-full w-full object-cover" src={image} alt="rabbit" />
        </div>
    );
}
