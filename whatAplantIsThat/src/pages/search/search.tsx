import React from 'react';
import { View, Text, Image, ImageBackground , Dimensions} from 'react-native';
import {Title, BackgroundContainer, FavoriteContainer, StarIcon} from './style';


import starIcon from '../../assets/images/emptyStar.png';

const { width, height } = Dimensions.get('window');

function SearchPage() {
    return(
        <View style={{flex:1, backgroundColor: 'blue'}}>
            <BackgroundContainer />
                {/* <FavoriteContainer>
                    <StarIcon source={starIcon}/>
                </FavoriteContainer> */}
                {/* <View>
                    <Title>What a Plant is That?</Title>
                    <Text>COMPONENTE - BARRA DE PESQUISA</Text>
                    <Text>COMPONENTE - PROCURA POR IMAGEM</Text>
                </View> */}
            {/* </BackgroundContainer> */}
        </View>
    )
};

export default SearchPage;