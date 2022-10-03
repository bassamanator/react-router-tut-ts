import { Link, Outlet, useSearchParams } from 'react-router-dom';

export const Users = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const showActiveUsers = searchParams.get('filter') === 'active';

	return (
		<>
			<div>
				<Link to='1'>user 1</Link>
				<br />
				<Link to='2'>user 2</Link>
				<br />
				<Link to='3'>user 3</Link>
			</div>
			<Outlet />
			<div>
				<button onClick={(e) => setSearchParams({ filter: 'active' })}>Active Users</button>
				<button onClick={(e) => setSearchParams({})}>Reset Filters</button>
			</div>
			{showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>}
		</>
	);
};
