import React from 'react';

type AuthContextType = {
	user: string | null;
	login: (user) => void;
	logout: () => void;
};
const AuthContext = React.createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = React.useState(null);

	const login = (user) => setUser(user);
	const logout = () => setUser(null);

	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return React.useContext(AuthContext);
};
