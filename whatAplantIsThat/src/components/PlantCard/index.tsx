import React from 'react';
import { LeafImage, LeafImageContainer, 
    LeafInfos, LeafInfosContainer, 
    PlantCardInnerContainer, PlantCardOutterContainer, 
    FavIcon } from './style';

function PlantCard() {
    return (
        <PlantCardOutterContainer>
            <PlantCardInnerContainer>
                <FavIcon />
                <LeafImageContainer>
                    <LeafImage />
                </LeafImageContainer>
                <LeafInfosContainer>
                    <LeafInfos>
                        Essa planta é uma planta muito louca, 
                        ela é mágica, e vai fazer trazer a tona 
                        tudo que há de haver dentro de você. 
                        Aproveite com sabedoria.
                    </LeafInfos>
                </LeafInfosContainer>
            </PlantCardInnerContainer>
        </PlantCardOutterContainer>
    )
}

export default PlantCard;