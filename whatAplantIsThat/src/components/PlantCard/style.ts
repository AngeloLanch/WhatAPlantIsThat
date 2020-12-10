import React from 'react';
import styled from 'styled-components/native';
import leef from '../../assets/images/amoreira.jpg';

export const PlantCardOutterContainer = styled.View`
    /* padding: 0px 10px; */
`;

export const PlantCardInnerContainer = styled.View`
    flex-direction: row;
    min-width: 100%;
    padding: 10px 0;
    border-bottom-width: 1px;
    border-bottom-color: #ABAC64;
`;

export const LeefImageContainer = styled.View`
    background: green;
    border: 1px solid #ABAC64;
    border-radius: 20px;
    overflow: hidden;
    justify-content: center;
`;

export const LeefImage = styled.Image.attrs({source: leef})`
    width: 120px;
    height: 120px;
`;

export const LeefInfosContainer = styled.View`
    padding: 0px 10px;
    height: 120px;
    overflow: hidden;
    flex: 1;
`;

export const LeefInfos = styled.Text`
    font-size: 20px;
    color: black;
`;

