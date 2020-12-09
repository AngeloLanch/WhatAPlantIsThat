import React from 'react';
import { Image, Text, View } from 'react-native';
import { LeefImage, LeefImageContainer, LeefInfos, LeefInfosContainer, PlantCardContainer } from './style';

function PlantCard() {
    return (
        <View>
            <PlantCardContainer>
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
                    <LeefInfos>
                        Essa planta é uma planta muito louca, 
                        ela é mágica, e vai fazer trazer a tona 
                        tudo que há de haver dentro de você. 
                        Aproveite com sabedoria.
                    </LeefInfos>
                    <LeefInfos>
                        Essa planta é uma planta muito louca, 
                        ela é mágica, e vai fazer trazer a tona 
                        tudo que há de haver dentro de você. 
                        Aproveite com sabedoria.
                    </LeefInfos>
                </LeefInfosContainer>
            </PlantCardContainer>
        </View>
    )
}

export default PlantCard;