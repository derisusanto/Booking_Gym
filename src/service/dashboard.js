import FETCH from '../config/index';

export const listSummary = () => {
	return FETCH.get(`/dashboard/summary`);
};
