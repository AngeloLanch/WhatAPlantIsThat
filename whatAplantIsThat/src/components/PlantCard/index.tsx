import React from 'react';
import { LeefImage, LeefImageContainer, 
    LeefInfos, LeefInfosContainer, 
    PlantCardInnerContainer, PlantCardOutterContainer, 
    FavIcon } from './style';

function PlantCard() {
    return (
        <PlantCardOutterContainer>
            <PlantCardInnerContainer>
                <FavIcon />
                <LeefImageContainer>
                    <LeefImage />
                </LeefImageContainer>
                <LeefInfosContainer>
                    <LeefInfos>
                        Essa planta é uma planta muito louca, 
                        ela é mágica, e vai fazer trazer a tona 
                        tudo que há de haver dentro de você. 
                        Aproveite com sabedoria.
                    </LeefInfos>
                </LeefInfosContainer>
            </PlantCardInnerContainer>
        </PlantCardOutterContainer>
    )
}

export default PlantCard;