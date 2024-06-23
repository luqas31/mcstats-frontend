import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function ResetPassword() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			const response = await fetch('http://localhost:3333/request-password-reset', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			});

			if (response.ok) {
				const data = await response.json();
				setMessage(data.message);
			} else {
				const data = await response.json();
				setMessage(data.message || 'Failed to reset password.');
			}
		} catch (error) {
			console.error('Error resetting password:', error);
			setMessage('Failed to reset password. Please try again later.');
		}
	};

	return (
		<div>
			<div className='login-background'>
				<div className='login-container'>
					<div className='login-title'>
						<h1>RESET PASSWORD</h1>
					</div>
					<div className='reset-form-container'>
						<form className='login-form' onSubmit={handleSubmit}>
							<input className='login-input' type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required />
							<div className='button-placement'>
								<button className='ip-login' type='submit'>
									RESET
								</button>
							</div>
						</form>
						{message && <p className='message'>{message}</p>}
					</div>
					<div className='login-buttons'>
						<Link className='login-links' to='/login'>
							Log in
						</Link>
						<Link className='signup-links' to='/stats'>
							Continue as Guest
						</Link>
						<Link className='login-links' to='/register'>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ResetPassword;
