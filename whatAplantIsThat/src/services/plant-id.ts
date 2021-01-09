import axios from 'axios';
import FormData from 'form-data'; // Readable "multipart/form-data" streams
import RNFetchBlob from 'react-native-fetch-blob';

async function request(pt: any) {

      const photo = RNFetchBlob.fs.readStream(pt, 'base64')
      console.log(photo)       
      const data = {
        api_key: "Ewa41yySiDjnhg1WOybSKKB4gbGAx0kzqO7zXcDQT39aar1ssL",
        images: photo,
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        plant_details: ["common_names",
                          "url",
                          "name_authority",
                          "wiki_description",
                          "taxonomy",
                          "synonyms"]
      };
      
      fetch('https://api.plant.id/v2/identify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };

export default request;