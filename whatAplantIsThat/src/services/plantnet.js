import axios from 'axios';
const fs = require('fs'); // File System | Node.js
const FormData = require('form-data'); // Readable "multipart/form-data" streams

const url = 'https://my-api.plantnet.org/v2/identify/all';
const apiKey = '2a10EX02sybZ3WQCvuH4xz0bJO';
const image = '/data/media/image_1.jpeg';
const organ = 'leaf';


const api = axios.create({
	  baseURL: `${url}?api-key=${apiKey}&images=${image}&organs=${organ}`
	  
})

export default api;


// ------------------
'use strict';

(async () => {
    let form = new FormData();
    
	form.append('organs', 'leaf');
	form.append('images', fs.createReadStream(image));

	try {
		const { status, data } = await axios.post(
			'https://my-api.plantnet.org/v2/identify/all?api-key=2a10EX02sybZ3WQCvuH4xz0bJO',
			form, {
				headers: form.getHeaders()
			}
		);

		console.log('status', status); // should be: 200
		console.log('data', require('util').inspect(data, false, null, true)); // should be: read "Step 6" below
	} catch (error) {
		console.error('error', error);
	}
})();