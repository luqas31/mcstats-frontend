import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import { Link } from 'react-router-dom';

function ChooseNewPassword() {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');
	const [token, setToken] = useState(null);

	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const tokenFromUrl = params.get('token');
		console.log('Token from URL:', tokenFromUrl);
		setToken(tokenFromUrl);
	}, [location.search]);

	const handleSubmit = async event => {
		event.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not match.');
			return;
		}

		if (!token) {
			setMessage('Invalid or missing token.');
			return;
		}

		try {
			const response = await axios.post('http://localhost:3333/reset-password', {
				token,
				newPassword: password,
			});

			if (response.status === 200) {
				setMessage('Password has been reset successfully.');
			} else {
				setMessage('Failed to reset password.');
			}
		} catch (error) {
			console.error('Error resetting password:', error);
			setMessage('Failed to reset password. Please try again later.');
		}
	};

	return (
		<div>
			<div className='login-background'>
				<div className='login-container' id='rsbg'>
					<div className='login-title'>
						<h2>Choose New Password</h2>
					</div>
					<div className='reset-container'>
						<form className='login-form' onSubmit={handleSubmit}>
							<input className='login-input' type='password' placeholder='New Password' value={password} onChange={e => setPassword(e.target.value)} required />
							<input className='login-input' type='password' placeholder='Confirm New Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
							<div className='button-placement'>
								<button className='ip-login ' type='submit'>
									Reset Password
								</button>
							</div>
						</form>
						{message && <p>{message}</p>}
					</div>
					<div className='login-buttons' id='reset-btn'>
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

export default ChooseNewPassword;
