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

export const ContentContainer = styled.View`
    height: ${height - 200}px;
    overflow: hidden;
    justify-content: flex-start;
    /* height: 100%; */
    /* justify-self: baseline; */
`;

export const PlantListFrame = styled.View`
    background-color: rgba(171,172,100, 0.3);
    padding:  5px 20px 15px 15px;
    border: 1px solid #ABAC64;
    border-radius: 10px;
    margin: 0 auto;
    flex: 1;
`;

export const PlantListContainer = styled.ScrollView`
`;