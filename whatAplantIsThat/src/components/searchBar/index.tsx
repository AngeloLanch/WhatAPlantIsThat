import React, {useState, useEffect} from 'react';
import {Root} from 'native-base';
import {SearchBarContainer, TextContainer, TextArea, 
        TouchableIcon, IconsContainer, CameraImage, SearchImage} 
    from './style';
import {ImageDataType} from '../../types/interface';
import {ActionSheet} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
// import request from './../../services/plant-id';
import request from './../../services/plantnet';


export function useTextSearch(): String {
    const [textSearch, setTextSearch] = useState<String>();
    
    const HandleTextSearch = (text: String) => {
        setTextSearch(text);
    }

    return ''
}


function SearchBar() {
    const [photo, setPhoto] = useState<ImageDataType>();
    const [textSearch, setTextSearch] = useState<String>();

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
    
    const HandleTextSearch = (text: String) => {
        const textLeefSearch = text;

        setTextSearch(textLeefSearch);
    };

    const HandleSearchingFor = () => {
        console.log(request(photo?.path));
    };

    return (
        <Root>
            <SearchBarContainer>
                <TextContainer>
                    <TextArea onChangeText={(text) => HandleTextSearch(text)}/>
                </TextContainer>
                <IconsContainer>
                    <TouchableIcon onPress={() => HandleImagePicker()}>
                        <CameraImage />
                    </TouchableIcon>
                    <TouchableIcon onPress={() => HandleSearchingFor()}>
                        <SearchImage />
                    </TouchableIcon>
                </IconsContainer>
            </SearchBarContainer>
        </Root>
    )
}

export default SearchBar;