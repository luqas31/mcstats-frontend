import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		if (password !== repeatPassword) {
			alert("Passwords don't match");
			return;
		}
		console.log(`Email: ${email}, Password: ${password}`);
	};

	return (
		<div>
			<div className='signup-background'>
				<div className='signup-container'>
					<div className='signup-title'>
						<h1>SIGN UP</h1>
					</div>
					<div className='signup-form-container'>
						<form className='signup-form' onSubmit={handleSubmit}>
							<input className='signup-input' type='email' placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
							<input className='signup-input' type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)} />
							<input className='signup-input' type='password' placeholder='Repeat Password' value={repeatPassword} onChange={event => setRepeatPassword(event.target.value)} />
							<Link to='/created'>
								<button className='signup-btn' type='submit'>
									Sign Up
								</button>
							</Link>
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
