import { Link } from 'react-router-dom';
import './index.css';

function Initial() {
	return (
		<div>
				<div className='ip-background'>
					<div className='ip-container'>
						<div className='ip-title'>
							<h1>
								Choose the option that best
								<br />
								suits your needs.
							</h1>
						</div>
						<div className='ip-buttons'>
							<Link className="ip-login-button" to='/login'>
								<button className='ip-login'>Log in</button>
							</Link>
							<Link to='/register'>
								<button className='ip-signin'>Sign in</button>
							</Link>
						</div>
						<Link to='/stats'>
							<div className='ip-guest-button'>
								<button className="ip-guest">Use the APP as a Guest</button>
							</div>
						</Link>
					</div>
				</div>
		</div>
	);
}

export default Initial;
