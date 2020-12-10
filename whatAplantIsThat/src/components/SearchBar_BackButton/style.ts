import styled from 'styled-components/native';
import BackIcon from '../../assets/images/backIcon.png'

export const SearchBar_BackButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;

export const BackButtonContainer = styled.TouchableOpacity`
    background-color: rgba(255, 255, 255, 0.6);
    border: 1px solid #ABAC64;
    border-radius: 10px;
    justify-content: center;
    padding: 10px 15px;
    margin-left: 12px;
    height: 45px;
`;

export const BackButtonIcon = styled.Image.attrs({source: BackIcon})`
    width: 20px;
    height: 25px;
`;