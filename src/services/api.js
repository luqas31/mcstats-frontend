import axios from 'axios';

axios.defaults.withCredentials = true;

export const loginUser = (email, password) => {
	return axios
		.post(`http://localhost:3333/login`, {
			email: email,
			password: password,
		})
		.then(response => {
			if (!response.data.message) {
				return false;
			} else {
				return true;
			}
		});
};

export const loggedIn = () => {
	return axios.get('http://localhost:3333/login').then(response => {
		return response;
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

export const userAuthenticated = () => {
	return axios
		.get('http://localhost:3333/auth', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})
		.then(response => console.log(response));
};

export function getPlayerRanking() {
	return axios
		.get('http://localhost:3333/player-ranking')
		.then(response => response.data)
		.catch(error => {
			console.error('Error fetching player ranking:', error);
			throw error;
		});
}
