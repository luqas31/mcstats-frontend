import axios from 'axios';

const API_URL = 'http://localhost:3333';

export const loginUser = (email, password) => {
	return axios.post(`${API_URL}/login`, {
		email: email,
		password: password,
	});
};

export const registerUser = (email, password) => {
	return axios.post('http://localhost:3333/register', {
		email: email,
		password: password,
	});
};

export function getPlayerStats(nickname) {
	return axios
		.get(`http://localhost:3333/player-stats?nick=${nickname}`)
		.then(response => response.data)
		.catch(error => {
			console.error('Error fetching player stats:', error);
			throw error;
		});
}