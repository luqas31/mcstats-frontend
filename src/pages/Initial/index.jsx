import { Link } from 'react-router-dom';

function Initial() {
	return (
		<div>
			<div className='ip-background'>
				<div className='ip-container'>
					<div className='ip-title'>
						<h1>
							Choose the option the best
							<br />
							suits your needs
						</h1>
					</div>
					<div className='ip-buttons'>
						<Link to='/login'>
							<button className='ip-login'>Log in</button>
                        </Link>
                        <Link to='/register'>
                            <button className='ip-signin'>Sign in</button>
                        </Link>
					</div>
					<div className='ip-guest'>
						<button className='ip-guest-button'>Continue as a guest</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Initial;
