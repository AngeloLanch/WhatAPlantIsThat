import React, {useState, createContext} from 'react';
import {plantNameRequest, plantDetailsRequest} from '../services/APIs';

interface PlantNamesData {
    scientificName: string[];
    plantDetails: any;
    plantNames: string[];
    requestByPhoto(photoURI: string): Promise<any> | null;
    requestByName(plantName: string[]): Promise<any> | null;
}

const PlantNamesContext = createContext<PlantNamesData>({} as PlantNamesData);

export const PlantNamesProvider: React.FC = ({children}) => {
    const [plantNames, setPlantNames] = useState<string[]>([]);
    const [plantDetails, setPlantDetails] = useState<any>([{}]);
        
    async function requestByPhoto(photoURI: string) {
        // const response = await plantNameRequest(photoURI)
        const exemples = ["Litsea glutinosa", "Persea americana", "Annona squamosa"]
        setPlantNames(exemples);
        requestByName(exemples);
    }

    async function requestByName(scientificName: string[]) {
        const response = await plantDetailsRequest(scientificName)
        setPlantDetails(response);
    }

    return(
        <PlantNamesContext.Provider value={{scientificName: [], requestByPhoto, requestByName, plantNames, plantDetails}}>
            {children}
        </PlantNamesContext.Provider>
    )
}

export default PlantNamesContext;