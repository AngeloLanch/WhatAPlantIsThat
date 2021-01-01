import React from 'react';
import {Root} from 'native-base';
import {SearchBarContainer, TextContainer, TextArea, 
        TouchableIcon, IconsContainer, CameraImage, SearchImage} 
    from './style';
import {useImagePicker} from './logic';


function SearchBar() {
    const {HandleImagePicker, photo} = useImagePicker();

    return (
        <Root>
            <SearchBarContainer>
                <TextContainer>
                    <TextArea></TextArea>
                </TextContainer>
                <IconsContainer>
                    <TouchableIcon onPress={() => HandleImagePicker()}>
                        <CameraImage />
                    </TouchableIcon>
                    <TouchableIcon>
                        <SearchImage />
                    </TouchableIcon>
                </IconsContainer>
            </SearchBarContainer>
        </Root>
    )
}

export default SearchBar;