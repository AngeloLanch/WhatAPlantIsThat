import {Dimensions, ImageRequireSource} from 'react-native'
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

import Background from '../../assets/images/searchScreen.png';

export const Title = styled.Text`
    max-width: 200px;
    font-size:  32px;
    text-align: center;
    margin: 0 auto;
    font-weight: bold;
    color: #F6841B;
`;

export const BackgroundContainer = styled.Image.attrs({
    imageStyle: {resizeMode:'stretch'}, source: Background
})`
    /* justify-content: center; */
    background-color: blue;
    width: 500px;
    height: 300px;
    flex: 1;
`;

export const FavoriteContainer = styled.View`
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.69);
    border: 1px solid #ABAC64;
`;

export const StarIcon = styled.Image`
    width: 35px;
`