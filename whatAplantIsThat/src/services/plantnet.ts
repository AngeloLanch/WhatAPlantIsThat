import axios from 'axios';
import FormData from 'form-data';
import RNFetchBlob from 'react-native-fetch-blob';

async function request(photo: any) {
	const url = 'https://my-api.plantnet.org/v2/identify/all';
	const apiKey = '2a10EX02sybZ3WQCvuH4xz0bJO';
	
	let form = new FormData;
	form.append('organs', 'leaf');
	form.append('images', RNFetchBlob.fs.readStream(photo, 'base64'));

	const apiInstance = axios.create({
		baseURL: `${url}?api-key=${apiKey}&images=${photo}`,
		headers: form.getHeaders()
	});

	const result = await apiInstance.post('/', form)

	console.log('restult: ', result);
	return result;
};


export default request;


// ---------------------------

// (async (photo) => {
// 	let form = new FormData();

// 	form.append('organs', 'flower');
// 	form.append('images',  fs.createReadStream(photo));

// 	try {
// 		const { status, data } = await axios.post(
// 			'https://my-api.plantnet.org/v2/identify/all?api-key=2a10EX02sybZ3WQCvuH4xz0bJO',
// 			form, {
// 				headers: form.getHeaders()
// 			}
// 		);

// 		console.log('status', status); // should be: 200
// 		console.log(data)
// 	} catch (error) {
// 		console.error('error', error);
// 	}
// })();