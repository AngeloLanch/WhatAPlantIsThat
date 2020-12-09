import React from 'react';
import styled from 'styled-components/native';
import leef from '../../assets/images/amoreira.jpg';

export const LeefImage = styled.Image.attrs({source: leef})`
    width: 120px;
    height: 120px;
`;

export const LeefImageContainer = styled.View`
    background: green;
`;

export const LeefInfos = styled.Text`
    font-size: 20px;
    background: blue;
    flex-wrap: wrap;
`;

export const LeefInfosContainer = styled.View`
    padding: 0px 10px;
    background: red;
    height: 120px;
    overflow: hidden;
`;

export const PlantCardContainer = styled.View`
    padding: 10px;
    flex-direction: row;
`;