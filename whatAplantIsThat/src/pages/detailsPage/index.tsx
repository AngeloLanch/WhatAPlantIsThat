import React from 'react';
import Favorites from '../../components/FavoritesIconContainer';
import SearchBar_BackButtonContainer from '../../components/SearchBar_BackButton';
import { MainContainer, BackgroundContainer, 
    ContentContainer, PlantListFrame,
    PlantListContainer, LeafImageContainer,
    LeafImage, LeafInfosContainer, 
    LeafInfos } from './style';

function DetailsPage() {
    return(
        <MainContainer>
            <BackgroundContainer>
                <Favorites />
                <ContentContainer>
                    <SearchBar_BackButtonContainer />
                    <PlantListFrame>
                        <PlantListContainer>
                            <LeafImageContainer>
                                <LeafImage />
                            </LeafImageContainer>
                            <LeafInfosContainer>
                                <LeafInfos>
                                    Essa planta é muito louca, 
                                    ela tem uma cor verde e tals... 
                                    e quer saber? Eu amo essa folha 
                                    verde. Mas isso não é o 
                                    suficiente para preencher todo 
                                    o vazio... deste card.
                                    Essa planta é muito louca, 
                                    ela tem uma cor verde e tals... 
                                    e quer saber? Eu amo essa folha 
                                    verde. Mas isso não é o 
                                    suficiente para preencher todo 
                                    o vazio... deste card.
                                    Essa planta é muito louca, 
                                    ela tem uma cor verde e tals... 
                                    e quer saber? Eu amo essa folha 
                                    verde. Mas isso não é o 
                                    suficiente para preencher todo 
                                    o vazio... deste card.
                                </LeafInfos>
                            </LeafInfosContainer>
                        </PlantListContainer>                                
                    </PlantListFrame>
                </ContentContainer>
            </BackgroundContainer>
        </MainContainer>
    )
};

export default DetailsPage;