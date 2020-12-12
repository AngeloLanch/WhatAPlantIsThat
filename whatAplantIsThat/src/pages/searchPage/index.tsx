import React from 'react';
import { MainContainer, Title, BackgroundContainer, TitleAndSearcheContainer } from './style';
import Favorites from '../../components/FavoritesIconContainer';
import SearchBar from '../../components/SearchBar';
import BaseContainer from '../../components/BaseContainer';


function SearchPage() {
    return(
        <BaseContainer>
            <Favorites />
            <TitleAndSearcheContainer>
                <Title>What a Plant is That?</Title>
                <SearchBar />
            </TitleAndSearcheContainer>
            {/* <PicSearcher /> */}
        </BaseContainer>
    )
}

export default SearchPage;