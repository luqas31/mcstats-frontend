import axios from 'axios';

const api = axios.create();

export async function getSkin(nickname) {
	const response = await api.get(`https://mc-heads.net/body/${nickname}`);

	return response.data;
}
