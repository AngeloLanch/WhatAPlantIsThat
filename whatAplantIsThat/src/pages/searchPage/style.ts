import {Dimensions } from 'react-native'
import styled from 'styled-components/native';
import Background from '../../assets/images/searchScreen.png';

const { width, height } = Dimensions.get('window');

export const MainContainer = styled.View`
    flex: 1;
    justify-content: center;
    position: absolute;
    top: 0;
`;

export const BackgroundContainer = styled.ImageBackground.attrs({
    source: Background,
    imageStyle: {resizeMode: 'stretch'}
})`
    height: ${height}px;
    width: ${width}px;
`;

export const TitleAndSearcheContainer = styled.View`
    height: ${height - 37}px;
    justify-content: center;
    transform: translateY(-20px);
`;

export const Title = styled.Text`
    font-size: 50px;
    max-width: 300px;
    text-align: center;
    margin: 0 auto 15px;
    color: #F6841B;
    font-family: 'NerkoOne-Regular';
`;