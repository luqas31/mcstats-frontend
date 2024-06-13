import { Link } from "react-router-dom";
import "./index.css";

function ResetPassword() {
	return (
		<div>
			<div className='login-background'>
				<div className='login-container'>
					<div className='login-title'>
						<h1>RESET PASSWORD</h1>
					</div>
					<div className='reset-form-container'>
						<form className='login-form'>
							<input className='login-input' type='email' placeholder='Email' />
							<div className='button-placement'>
								<button className='ip-login' type='submit'>
									RESET
								</button>
							</div>
						</form>
					</div>
					<div className='login-buttons'>
						<Link className='login-links' to='/login'>
							Log in
						</Link>
						<Link className='signup-links' to='/stats'>
							Continua as a Guest
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
