import React from 'react';
import { SearchBarContainer, TextContainer, TextArea, 
    TouchableIcon, IconsContainer, CameraImage, SearchImage } 
    from './style';

function SearchBar() {
    return (
        <SearchBarContainer>
            <TextContainer>
                <TextArea></TextArea>
            </TextContainer>
            <IconsContainer>
                <TouchableIcon>
                    <CameraImage />
                </TouchableIcon>
                <TouchableIcon>
                    <SearchImage />
                </TouchableIcon>
            </IconsContainer>
        </SearchBarContainer>
    )
}

export default SearchBar