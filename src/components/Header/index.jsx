import { Link } from 'react-router-dom';
import './index.css';

function Header() {
	return (
		<div>
			<header>
				<nav>
					<div className='header-container'>
						<div className='header-logo'>
							<Link to='/'>
								<img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png' alt='Creeper logo' height='30px' width='30px' />
							</Link>
						</div>
						<div className='header-links'>
							<Link className="nav" to='/stats'>Stats</Link>
							<Link className="nav" to='/ranking'>Ranking</Link>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default Header;
