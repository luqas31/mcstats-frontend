import { Link } from "react-router-dom";

function ResetPassword() {
	return (
		<div>
			<div className='reset-background'>
				<div className='reset-container'>
					<div className='reset-title'>
						<h1>RESET PASSWORD</h1>
					</div>
					<div className='reset-form'>
						<form>
							<input type='email' placeholder='Email' />
							<button type='submit'>Reset Password</button>
						</form>
					</div>
					<div className='reset-buttons'>
						<Link to='/login'>Log In</Link>
						<Link to='/register'>Sign Up</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ResetPassword;
