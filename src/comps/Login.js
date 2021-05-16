import React from 'react';

const Login = () => {
	return (
		<div className='row'>
			<form className='col s12'>
				<div className='row'>
					<div className='input-field col s12'>
						<input
							type='text'
							name='email'
							id=''
							className='validate'
						/>
						<label htmlFor='email'>Email</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field col s12'>
						<input
							type='password'
							name='passowrd'
							id=''
							className='validate'
						/>
						<label htmlFor='Password'>Password</label>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
