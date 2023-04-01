import FETCH from '../config/index';

export const listClient = id => {
	return FETCH.get(`/schedule/getClient/${id}`);
};

export const listLocationPublict = () => {
	return FETCH.get(`/location/publicLocation`);
};

export const listCategoryPublict = () => {
	return FETCH.get(`/category/publicCategory`);
};
