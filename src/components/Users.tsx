import { Outlet } from 'react-router-dom';

export const Users = () => {
	return (
		<>
			<div>
				<h2>user 1</h2>
				<h2>user 2</h2>
				<h2>user 3</h2>
			</div>
			<Outlet />
		</>
	);
};
