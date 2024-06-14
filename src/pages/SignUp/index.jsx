import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
	const [emailReg, setEmailReg] = useState('');
	const [passwordReg, setPasswordReg] = useState('');
	const [passwordRegRepeat, setPasswordRegRepeat] = useState('');

const navigate = useNavigate();

	const register = event => {
		event.preventDefault();

		if (passwordReg !== passwordRegRepeat) {
			alert('Passwords do not match!');
			return;
		}

		axios
			.post('http://localhost:3333/register', {
				email: emailReg,
				password: passwordReg,
			})
			.then(response => {
				console.log(response);
				navigate('/created'); 
			})
			.catch(error => {
				alert('Email already in use!', error);
			});
	};
	return (
		<div>
			<div className='signup-background'>
				<div className='signup-container'>
					<div className='signup-title'>
						<h1>SIGN UP</h1>
					</div>
					<div className='signup-form-container'>
						<form className='signup-form' onSubmit={register}>
							<input
								className='signup-input'
								type='email'
								placeholder='Email'
								onChange={e => {
									setEmailReg(e.target.value);
								}}
							/>
							<input
								className='signup-input'
								type='password'
								placeholder='Password'
								onChange={e => {
									setPasswordReg(e.target.value);
								}}
							/>
							<input
								className='signup-input'
								type='password'
								placeholder='Repeat Password'
								onChange={e => {
									setPasswordRegRepeat(e.target.value);
								}}
							/>
							<button className='signup-btn' type='submit'>
								Sign Up
							</button>
						</form>
					</div>
					<div className='signup-buttons'>
						<Link className='signup-links' to='/login'>
							Log In
						</Link>
						<Link className='signup-links' to='/stats'>
							Continua as a Guest
						</Link>
						<Link className='signup-links' to='/recovery'>
							Forgot Password?
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
