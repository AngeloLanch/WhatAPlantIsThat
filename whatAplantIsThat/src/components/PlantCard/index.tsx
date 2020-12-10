import React from 'react';
import { Image, Text, View } from 'react-native';
import { LeefImage, LeefImageContainer, LeefInfos, LeefInfosContainer, PlantCardInnerContainer, PlantCardOutterContainer } from './style';

function PlantCard() {
    return (
        <PlantCardOutterContainer>
            <PlantCardInnerContainer>
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