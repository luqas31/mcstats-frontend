import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import './index.css';
import { getPlayerRanking } from '../../services/api.js';

function Ranking() {
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		getPlayerRanking()
			.then(playersData => {
				setPlayers(playersData);
			})
			.catch(error => {
				console.error('Error fetching player ranking:', error);
			});
	}, []);

	return (
		<>
			<Header />
			<div className='stats-background' id='ranking'>
				<h1 className='ranking'>Top 3 Players</h1>
				<div className='players'>
					{players.map((player, index) => (
						<div className='player-box' key={index}>
							<img src={`https://mc-heads.net/avatar/${player.nick}/25`} alt={`${player.nick}'s skin`} />
							<p className='nick'>{player.nick}</p>
							<p>{player.kills} kills</p>
							<p>{player.deaths} deaths</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Ranking;
