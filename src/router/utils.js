
export const ACCESS_TOKEN_KEY = "_react-router-6";

export const login = ( access_token) => {
	localStorage.setItem(ACCESS_TOKEN_KEY, access_token  && access_token);
	console.log('ACCESS_TOKEN_KEY',ACCESS_TOKEN_KEY)
	window.location = "/admin/dashboard"
}


export const logout = () => {
	localStorage.removeItem(ACCESS_TOKEN_KEY);
	window.location = "/login"
}

export const isLogin = () => {
	if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
		return true;
	}
	return false;
}

export const token = () => {
	return localStorage.getItem(ACCESS_TOKEN_KEY);
}