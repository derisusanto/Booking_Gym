import fetch from '../config/index';

export const listClient = id => {
	return fetch.get(`/schedule/getClient/${id}`);
};
