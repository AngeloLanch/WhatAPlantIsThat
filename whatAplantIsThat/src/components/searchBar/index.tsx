import React, {useState} from 'react';
import {ActionSheet, Root} from 'native-base';
import {SearchBarContainer, TextContainer, TextArea, 
        TouchableIcon, IconsContainer, CameraImage, SearchImage} 
    from './style';
import ImagePicker from 'react-native-image-crop-picker';
import {ImageDataType} from '../../types/interface';

function SearchBar() {
    const [photo, setPhoto] = useState<ImageDataType>();

    const HandleImagePicker = () => {
        
        const BUTTONS = [
            {text: 'Take a shot'}, 
            {text: "Select from Gallery"}, 
            {text: 'Cancel'}
        ];
        
        ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: 2,
              title: "Where is your little plant image?"
            },
            buttonIndex => {
                if(buttonIndex == 0) {
                    ImagePicker.openCamera({
                        width: 300,
                        height: 400,
                        cropping: true
                    })
                    .then(image => {
                        setPhoto(image)
                    });
                };

                if(buttonIndex == 1) {
                    ImagePicker.openPicker({
                        width: 300,
                        height: 400,
                        cropping: true
                    })
                    .then(image => {
                        setPhoto(image)
                    });
                };

                if(buttonIndex !==0 && buttonIndex !==1) {
                    return
                };
            }
        )
    };

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