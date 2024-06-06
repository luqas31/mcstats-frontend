import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		console.log(`Email: ${email}, Password: ${password}`);
	};

	return (
		<div>
			<div className='login-background'>
                <div className='login-container'>
                    <div className="login-title">
                        					<h1>LOG IN</h1>
                    </div>
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                            <button type='submit'>Log in</button>
                        </form>
                    </div>
                    <div className="login-buttons">
                        <Link to="/register">Sign Up</Link>
                        <Link to="/recovery">Forgot Password?</Link>

                    </div>

				</div>
			</div>
		</div>
	);
}

export default Login;
