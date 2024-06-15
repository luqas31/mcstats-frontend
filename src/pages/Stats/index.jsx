/* import Header from "../../components/Header";

function Stats() {
    return (

        <div>
            <Header />
				<div className='stats-background'>
					<div className='stats-container'>
						<div className='stats-form'>
							<input type='text' />
							<button>Search</button>
						</div>
						<div className='stats'>
							<img src='https://mc-heads.net/body/c5ef3347-4593-4f39-8bb1-2eaa40dd986e' alt='' />
							<div className='stats-info'>
								<h2>Nickname</h2>
								<h3>Kills</h3>
								<p>0</p>
								<h3>Deaths</h3>
								<p>0</p>
								<h3>KD Ratio</h3>
								<p>0</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Stats;
 */

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import './index.css';
import { getPlayerStats } from '../../services/api';

function Stats() {
	const [nickname, setNickname] = useState('');
	const [displayedNickname, setDisplayedNickname] = useState('');
	const [skinUrl, setSkinUrl] = useState('https://mc-heads.net/body/');
	const [playerStats, setPlayerStats] = useState({ kills: 0, deaths: 0 });

	const handleSearch = event => {
		event.preventDefault();
		setSkinUrl(`https://mc-heads.net/body/${nickname}`);
		setDisplayedNickname(nickname);
	};

	useEffect(() => {
		if (displayedNickname) {
			getPlayerStats(displayedNickname)
				.then(data => {
					if (data && Object.keys(data).length > 0) {
						setPlayerStats(data);
					} else {
						alert('Player not found on the server');
						setPlayerStats({ kills: '0', deaths: '0' });
					}
				})
				.catch(error => {
					console.error('Error fetching player stats:', error);
				});
		}
	}, [displayedNickname]);

	const KDR = playerStats.deaths === 0 ? playerStats.kills : playerStats.kills / playerStats.deaths;

	return (
		<div>
			<Header />
			<div className='stats-background'>
				<div className='stats-container'>
					<form className='stats-form' onSubmit={handleSearch}>
						<input className='search-input' type='text' value={nickname} onChange={e => setNickname(e.target.value)} />
						<button className='search-btn ' type='submit'>
							Search
						</button>
					</form>
					<div className='stats'>
						{skinUrl ? <img className='skin' src={skinUrl} alt='Minecraft Skin' /> : <p>Loading...</p>}
						{displayedNickname && (
							<div className='stats-info'>
								<h2>{displayedNickname}</h2>
								<h3>Kills</h3>
								<p>{playerStats.kills}</p>
								<h3>Deaths</h3>
								<p>{playerStats.deaths}</p>
								<h3>KD Ratio</h3>
								<p>{KDR}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Stats;
