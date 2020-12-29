import React, { useState } from 'react';

import { SearchBarContainer, TextContainer, TextArea, 
    TouchableIcon, IconsContainer, CameraImage, SearchImage } 
    from './style';

import ImagePicker from 'react-native-image-crop-picker';

function SearchBar() {
    const [photo, setPhoto] = useState<String>('');

    function HandleImagePicker() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image)
          });
    };

    return (
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
    )
}

export default SearchBar;