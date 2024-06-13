import { Link } from 'react-router-dom';
import './index.css';

function CreatedAccount() {
	return (
		<div>
			<div className='login-background'>
				<div className='login-container'>
					<div className='login-title'>
						<h2>Your account has been successfully created</h2> <br />
						<p>You can now log in.</p>
					</div>

					<Link to="/login"
					>
					<button className='ip-login' type='submit'>
						Log in
					</button></Link>
				</div>
			</div>
		</div>
	);
}

export default CreatedAccount;
