import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

const api = {
	photos: {
		findAll: () => instance.get('/photos'),
	},
	images: {
		findAll: () => instance.get('/images'),
	},
};

export default api;
