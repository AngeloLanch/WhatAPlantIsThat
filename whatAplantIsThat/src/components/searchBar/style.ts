import styled from 'styled-components/native';
import CameraIcon from '../../assets/images/camera2x.png';
import SearchIcon from '../../assets/images/search2x.png';

export const SearchBarContainer = styled.View`
    padding: 0 12px;
    flex-direction: row;
    max-height: 45px;
    flex: 1;
`;

export const TextContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.6);
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-right-width: 0px;
    border: 1px solid #ABAC64;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    flex: 1;
`;

export const TextArea = styled.TextInput`
    font-size: 22px;
    padding-left: 15px;
    padding-bottom: 8px;
`;

export const IconsContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.6);
    border-right-width: 1px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-style: solid;
    border-color: #ABAC64;
    flex-direction: row;
`;

export const TouchableIcon = styled.TouchableOpacity`
    justify-content: center;
    border-left-width: 2px;
    border-style: solid;
    border-color: #ABAC64;
    padding: 0 15px;
`;

export const CameraImage = styled.Image.attrs({source: CameraIcon})`
    width: 35px;
    height: 30px;
    
`;

export const SearchImage = styled.Image.attrs({source: SearchIcon})`
    width: 35px;
    height: 30px;
`;