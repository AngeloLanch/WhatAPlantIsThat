import axios from 'axios';

export async function plantNameRequest(photoURI: string) {
	const url = 'https://my-api.plantnet.org/v2/identify/all';
	const apiKey = '2b10pygBTVKlnxQwki3goZxbje';
	const photo: any = {uri: photoURI, name: 'folha.jpg', type: 'image/jpeg'};

	let form = new FormData();
	form.append('organs', 'leaf');
	form.append('images', photo);
	
	
	const IAResults = await axios.post(`${url}?api-key=${apiKey}`
	, form, {
		headers: {'Content-Type': 'multipart/form-data'},
	})
	.then(response => {
		const data = response.data.results;
		const scientificNames = data.map((item: string) => {
			const novoItem = item.species.scientificNameWithoutAuthor
			return novoItem
		});

		return scientificNames;
	})	
	.catch(error => {
		if (error.response) {
		  console.log('data error: ', error.response.data);
		  console.warn('Please, select a valid image. Min. size suggest: 500x500');

		} else {
		  console.log('request error: ', error.request);
		  console.warn('unavailable service. Please, try again later');
		}
	});
	
	console.log('results req: ', IAResults);
	return IAResults;
};

export async function plantDetailsRequest(scientificNames: string[]) {
	const url = 'https://trefle.io/api/v1/species/search?';
	const apiKey = '0RunDeAdEkTeU89NfR-VHr55J2UFca8i1QGKXg6o50w';
	
	const nameWithoutSpace = scientificNames.map(name => {
		const newName = name.replace(/( )+/g, '-');
		return newName;
	});

	const detailsResults = nameWithoutSpace.map(async(name) => {
		console.log('url', `${url}token=${apiKey}&q=${name}`)

		const request = await axios.get(`${url}token=${apiKey}&q=${name}`)
		.then(response => {
			const data = response.data;
			return data;
		})
		.catch(error => {
			if (error.response) {
			console.log('data error: ', error.response.data);
			console.warn('Please, select a valid image. Min. size suggest: 500x500');

			} else {
			console.log('request error: ', error.request);
			console.warn('unavailable service. Please, try again later');
			}
		});

		return request;
	});
			
	return detailsResults;
};