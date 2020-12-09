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
    justify-content: center;
`;

export const PlantListContainer = styled.View`
    background: rgba(255, 255, 255, 0.4);
    border: 1px solid #ABAC64;
    border-radius: 10px;
    margin: 0 auto;
`;

export const ContentContainer = styled.View`

`;