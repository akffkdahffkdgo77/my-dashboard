import type { CardMediaPropsType } from 'common/Card/CardMedia/types';

export default function CardMedia({ image }: CardMediaPropsType) {
    return (
        <div className="w-full h-[194px]">
            <img width={344} height={194} className="w-full h-full object-cover" src={image} alt="rabbit" />
        </div>
    );
}
