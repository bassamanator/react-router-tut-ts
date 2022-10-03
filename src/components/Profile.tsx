import * as React from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	return (
		<div>
			Welcome {auth.user}
			<button
				onClick={() => {
					auth.logout();
					navigate('/');
				}}
			>
				Logout
			</button>
		</div>
	);
};
