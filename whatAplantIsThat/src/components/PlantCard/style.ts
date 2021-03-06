import styled from 'styled-components/native';
import leaf from '../../assets/images/amoreira.jpg';
import emptyStar from '../../assets/images/emptyStar.png';

export const PlantCardOutterContainer = styled.View`
`;

export const PlantCardInnerContainer = styled.View`
    min-width: 100%;
    padding: 20px 0;
    border-bottom-width: 1px;
    border-bottom-color: #ABAC64;
`;

export const LeafImageContainer = styled.View`
    margin: 0 auto 15px;
    border: 1px solid #ABAC64;
    border-radius: 20px;
    overflow: hidden;
`;

export const LeafImage = styled.Image.attrs({source: leaf})`
    width: 120px;
    height: 120px;
`;

export const LeafInfosContainer = styled.View`
    padding: 0px 10px;
    height: 120px;
    overflow: hidden;
    flex: 1;
`;

export const LeafInfos = styled.Text`
    font-size: 20px;
    color: black;
`;

export const FavIcon = styled.Image.attrs({source: emptyStar})`
    width: 25px;
    height: 25px;
    align-self: flex-end;
    position: absolute;
    top: 5px;
`;
