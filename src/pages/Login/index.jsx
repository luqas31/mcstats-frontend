import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api.js';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const login = event => {
		event.preventDefault();
		loginUser(email, password)
			.then(response => {
				console.log(response);
				navigate('/stats');
			})
			.catch(error => {
				console.error('Error during login:', error);
				if (error.response.status === 404) {
					alert('That account does not exist!');
				} else if (error.response.status === 401) {
					alert('Wrong email/password combination!');
				} else {
					alert('An error occurred! Please try again.');
				}
			});
	};

	return (
		<div>
			<div className='login-background'>
				<div className='login-container'>
					<div className='login-title'>
						<h1>LOG IN</h1>
					</div>
					<div className='login-form-container'>
						<form className='login-form' onSubmit={login}>
							<input className='login-input' type='email' placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
							<input className='login-input' type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)} />
							<div className='button-placement'>
								<button className='ip-login' type='submit'>
									Log in
								</button>
							</div>
						</form>
					</div>
					<div className='login-buttons'>
						<Link className='login-links' to='/register'>
							Sign Up
						</Link>
						<Link className='login-links' to='/recovery'>
							Forgot Password?
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
