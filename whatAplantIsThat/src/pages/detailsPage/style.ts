import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Background from '../../assets/images/searchScreen.png';
import Leaf from '../../assets/images/amoreira.jpg';
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
    top: 15%;
    flex: 1;
`;

export const PlantListFrame = styled.View`
    background-color: rgba(255, 255, 255, 0.6);
    padding:  22px 10px;
    border: 1px solid #ABAC64;
    border-radius: 10px;
    margin: 0 12px;
    margin-bottom: 10px;
    height: ${height - 212}px;
    overflow: hidden;
`;

export const PlantListContainer = styled.ScrollView`
    padding-right: 10px;
`;

export const LeafImageContainer = styled.View`
    margin: 0 auto 15px;
    border: 1px solid #ABAC64;
    border-radius: 20px;
    overflow: hidden;
    width: 200px;
    height: 200px;
`;

export const LeafImage = styled.Image.attrs({source: Leaf})`
    width: 100%;
    height: 100%;
    
`;

export const LeafInfosContainer = styled.View`
    padding: 0px 15px;
    flex: 1;
`;

export const LeafInfos = styled.Text`
    font-size: 22px;
    color: black;
`;