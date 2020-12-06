import React from 'react';
import { MainContainer, Title, BackgroundContainer, ContentContainer } from './style';
import Favorites from '../../components/FavoritesIcon';
import SearchBar from '../../components/SearchBar/';

function SearchPage() {
    return(
        <MainContainer>
            <BackgroundContainer> 
                <Favorites />
                <ContentContainer>
                    <Title>What a Plant is That?</Title>
                    <SearchBar />
                </ContentContainer>
                {/* <PicSearcher /> */}
            </BackgroundContainer>
        </MainContainer>
    )
}

export default SearchPage;