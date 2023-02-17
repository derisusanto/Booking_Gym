import FETCH from '../config/index';

export const signIn = data => {
	return FETCH.post(`/auth/login`, data);
};

export const signUp = data => {
	return FETCH.post(`/member/create`, data);
};
