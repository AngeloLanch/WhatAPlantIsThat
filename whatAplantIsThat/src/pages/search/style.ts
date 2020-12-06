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

export const ContentContainer = styled.View`
    height: ${height - 37}px; /* 37px is the favorite component height */
    justify-content: center;
    transform: translateY(-80px);
`;

export const Title = styled.Text`
    font-size: 35px;
    max-width: 200px;
    text-align: center;
    margin: 0 auto;
    color: #F6841B;
    /* font-family: NerkoOne; */
`;