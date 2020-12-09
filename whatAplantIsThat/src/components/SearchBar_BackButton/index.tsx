import React from 'react';
import SearchBar from '../SearchBar';
import {SearchBar_BackButtonContainer, BackButtonContainer, BackButtonIcon } from './style'

function SearchBar_BackButton() {
    return(
        <SearchBar_BackButtonContainer>
            <BackButtonContainer>
                <BackButtonIcon />
            </BackButtonContainer>
            <SearchBar />
        </SearchBar_BackButtonContainer>
    )
}

export default SearchBar_BackButton;