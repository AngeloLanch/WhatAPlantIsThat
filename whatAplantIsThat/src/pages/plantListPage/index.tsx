import React from 'react';
import Favorites from '../../components/FavoritesIconContainer';
import PlantCard from '../../components/PlantCard';
import SearchBar_BackButtonContainer from '../../components/SearchBar_BackButton';
import { MainContainer, BackgroundContainer, 
    PlantListFrame, PlantListContainer, 
    ContentContainer} from './style';


function PlantListPage() {
    return(
        <MainContainer>
            <BackgroundContainer>
                <Favorites />
                <ContentContainer>
                    <SearchBar_BackButtonContainer />
                    <PlantListFrame>
                        <PlantListContainer>
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                        </PlantListContainer>                                
                    </PlantListFrame>
                </ContentContainer>
            </BackgroundContainer>
        </MainContainer>
    )
}

export default PlantListPage;