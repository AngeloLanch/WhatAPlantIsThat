import axios from 'axios';
import greenLeef from '../assets/images/amoreira.jpg';
import fs from 'fs'; // File System | Node.js
import FormData from 'form-data'; // Readable "multipart/form-data" streams

const url = 'https://my-api.plantnet.org/v2/identify/all';
const apiKey = '2a10EX02sybZ3WQCvuH4xz0bJO';

let form = new FormData();
form.append('organs', 'leaf');
form.append('images', fs.createReadStream(greenLeef));

const apiInstance = axios.create({
	baseURL: `${url}?api-key=${apiKey}&images=${greenLeef}&organs=leef}`,
	headers: form.getHeaders()
});

async function teste() {
	const result = await apiInstance.post('/');
	console.log(result);
	return result;
}

export default teste;


// ---------------------------

// 'use strict';

// const fs = require('fs'); // File System | Node.js
// const axios = require('axios'); // HTTP client
// const FormDataa = require('form-data'); // Readable "multipart/form-data" streams

// const image_1 = '/data/media/image_1.jpeg';
// const image_2 = '/data/media/image_2.jpeg';

// (async () => {
// 	let form = new FormDataa();

// 	form.append('organs', 'flower');
// 	form.append('images', fs.createReadStream(image_1));

// 	form.append('organs', 'leaf');
// 	form.append('images', fs.createReadStream(image_2));

// 	try {
// 		const { status, data } = await axios.post(
// 			'https://my-api.plantnet.org/v2/identify/all?api-key=2a10EX02sybZ3WQCvuH4xz0bJO',
// 			form, {
// 				headers: form.getHeaders()
// 			}
// 		);

// 		console.log('status', status); // should be: 200
// 		console.log('data', require('util').inspect(data, false, null, true)); // should be: read "Step 6" below
// 	} catch (error) {
// 		console.error('error', error);
// 	}
// })();