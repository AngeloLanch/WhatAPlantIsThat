import styled from 'styled-components/native';
import starIcon from '../../assets/images/emptyStar.png'

export const FavoriteContainer = styled.View`
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.4);
    border: 2px solid #ABAC64;
    border-top-width: 0;
    border-bottom-width: 2px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 2px 5px 5px;
    height: auto;
    justify-content: flex-start;
`;

export const StarIcon = styled.Image.attrs({source: starIcon, resizeMode: 'stretch'})`
    width: 35px;
    height: 35px;
`;