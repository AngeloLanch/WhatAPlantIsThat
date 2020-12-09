import React from 'react';
import { View } from 'react-native';
import Favorites from '../../components/FavoritesIconBox';
import PlantCard from '../../components/PlantCard';
import SearchBar_BackButtonContainer from '../../components/SearchBar_BackButton';
import { MainContainer, BackgroundContainer, PlantListContainer, ContentContainer} from './style';


function PlantListPage() {
    return(
        <MainContainer>
            <BackgroundContainer>
                <Favorites />
                <ContentContainer>
                    <SearchBar_BackButtonContainer />
                    <PlantListContainer>
                        <PlantCard />
                    </PlantListContainer>
                </ContentContainer>
            </BackgroundContainer>
        </MainContainer>
    )
}

export default PlantListPage;