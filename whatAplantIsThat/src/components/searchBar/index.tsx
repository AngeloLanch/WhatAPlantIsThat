import React, {useState, useContext, useEffect} from 'react';
import {Root, ActionSheet} from 'native-base';

import {SearchBarContainer, TextContainer, TextArea, 
        TouchableIcon, IconsContainer, CameraImage, SearchImage} 
    from './style';
import {ImageDataType} from '../../types/interface';
import ImagePicker from 'react-native-image-crop-picker';

import PlantNamesContext from '../../context/plantNamesContext';

function SearchBar() {
    const [photo, setPhoto] = useState<ImageDataType>();
    const [textSearch, setTextSearch] = useState<string[]>([]);
    const {requestByPhoto, requestByName, plantNames, plantDetails} = useContext(PlantNamesContext);

    useEffect(() => {
        if(photo) {
            HandleSearching()
        }
    }, [photo]);

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
    
    const HandleTextSearch = (text: string[]) => {
        const textLeefSearch = text;
        setTextSearch(textLeefSearch);
    };

    const HandleSearching = async () => {      
        if(photo) {
            await requestByPhoto(photo.path);
        }
        
        if(textSearch) {
            await requestByName(textSearch);
        }
    };

    return (
        <Root>
            <SearchBarContainer>
                <TextContainer>
                    <TextArea onChangeText={(text) => HandleTextSearch([text])}/>
                </TextContainer>
                <IconsContainer>
                    <TouchableIcon onPress={() => HandleImagePicker()}>
                        <CameraImage />
                    </TouchableIcon>
                    <TouchableIcon onPress={() => HandleSearching()}>
                        <SearchImage />
                    </TouchableIcon>
                </IconsContainer>
            </SearchBarContainer>
        </Root>
    )
}

export default SearchBar;