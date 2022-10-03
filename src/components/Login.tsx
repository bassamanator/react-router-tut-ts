import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './auth';

export const Login = () => {
	const [user, setUser] = React.useState('');
	const auth = useAuth();
	const navigate = useNavigate();

	const location = useLocation();
	const redirectPath = location.state?.path || '/';

	return (
		<div>
			<label htmlFor=''>
				Username:
				<input type='text' className='text' onChange={(e) => setUser(e.target.value)} />
			</label>
			<button
				onClick={() => {
					auth.login(user);
					navigate(redirectPath, { replace: true });
				}}
			>
				Login
			</button>
		</div>
	);
};
