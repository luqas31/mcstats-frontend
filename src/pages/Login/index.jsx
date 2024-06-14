import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import axios from 'axios';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = event => {
		event.preventDefault();
		axios
			.post('http://localhost:3333/login', {
				email: email,
				password: password,
			})
			.then(response => {
				console.log(response);
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
								<button className='ip-login' type='submit' onClick={login}>
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
