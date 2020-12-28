import React, { useState } from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';

import { SearchBarContainer, TextContainer, TextArea, 
    TouchableIcon, IconsContainer, CameraImage, SearchImage } 
    from './style';

function SearchBar() {
    const [photo, setPhoto] = useState<String>('');

    function HandleLaunchImage() {
        launchImageLibrary({mediaType: 'photo'}, data => {

            if(data.didCancel) {
                return;
            }

            if(data.errorCode) {
                return;
            }

            if(data.uri)
            setPhoto(data.uri);
        });
    };


    return (
        <SearchBarContainer>
            <TextContainer>
                <TextArea></TextArea>
            </TextContainer>
            <IconsContainer>
                <TouchableIcon onPress={() => HandleLaunchImage()}>
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