import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PlaceholderImage from 'assets/images/andriyko-podilnyk-3a1NOxCBY10-unsplash.jpg';
import { CardContainer, CardHeader, CardHeading, CardMedia, CardSubtitle, CardSupportingVisual, CardTitle } from 'common';

export default function CardList() {
    return (
        <ul className="flex flex-wrap items-center gap-5">
            {Array.from({ length: 8 }).map((_, index) => (
                <li key={index} className="w-full max-w-[344px]">
                    <CardContainer>
                        <CardHeader>
                            <CardSupportingVisual>
                                <FontAwesomeIcon icon={faPaintBrush} />
                            </CardSupportingVisual>
                            <CardHeading>
                                <CardTitle title="멋진 UI를 위한 CSS 스터디" />
                                <CardSubtitle subtitle="2022.06.01 ~ 2022.06.27" />
                            </CardHeading>
                        </CardHeader>
                        <CardMedia image={PlaceholderImage} />
                    </CardContainer>
                </li>
            ))}
        </ul>
    );
}
