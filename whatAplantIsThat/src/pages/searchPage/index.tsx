import React from 'react';
import { MainContainer, Title, BackgroundContainer, TitleAndSearcheContainer } from './style';
import Favorites from '../../components/FavoritesIconContainer';
import SearchBar from '../../components/SearchBar';


function SearchPage() {
    return(
        <MainContainer>
            <BackgroundContainer> 
                <Favorites />
                <TitleAndSearcheContainer>
                    <Title>What a Plant is That?</Title>
                    <SearchBar />
                </TitleAndSearcheContainer>
                {/* <PicSearcher /> */}
            </BackgroundContainer>
        </MainContainer>
    )
}

export default SearchPage;