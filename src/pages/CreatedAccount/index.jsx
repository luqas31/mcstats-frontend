import { Link } from 'react-router-dom';

function CreatedAccount() {
	return (
		<div>
			<div className='created-background'>
				<div className='created-container'>
					<h2>Your account has been successfully created</h2>
					<p>Now you can log in and enjoy our services</p>
					<Link to='/login'><button>Login</button></Link>
				</div>
			</div>
		</div>
	);
}

export default CreatedAccount;
