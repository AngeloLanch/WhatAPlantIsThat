import React from 'react';
import Favorites from '../../components/FavoritesIconContainer';
import SearchBar_BackButtonContainer from '../../components/SearchBar_BackButton';
import { MainContainer, BackgroundContainer, 
    ContentContainer, PlantListFrame,
    PlantListContainer } from './style';

function DetailsPage() {
    return(
        <MainContainer>
            <BackgroundContainer>
                <Favorites />
                <ContentContainer>
                    <SearchBar_BackButtonContainer />
                    <PlantListFrame>
                        <PlantListContainer>
                        </PlantListContainer>                                
                    </PlantListFrame>
                </ContentContainer>
            </BackgroundContainer>
        </MainContainer>
    )
};

export default DetailsPage;