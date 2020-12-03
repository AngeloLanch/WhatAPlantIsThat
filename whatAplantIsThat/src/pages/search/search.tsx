import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import {Title, styles} from './style';

const background = '../../assets/images/searchScreen-bg.png';

function SearchPage() {
    return(
        <ImageBackground style={styles.page} imageStyle={styles.bg} source={require(background)}>
            <View>
                <Text>4</Text>
            </View>
            <View>
                <Title>What a Plant is That?</Title>
                <Text>COMPONENTE - BARRA DE PESQUISA</Text>
                <Text>COMPONENTE - PROCURA POR IMAGEM</Text>
            </View>
        </ImageBackground>
    )
};

export default SearchPage;