import FETCH from '../config/index';

//user
export const createUser = data => {
	return FETCH.post(`/user/create`, data);
};

export const listUser = () => {
	return FETCH.get(`/user/get`);
};

export const getUserById = id => {
	return FETCH.get(`/user/getUser/${id}`);
};

export const putUser = (id, data) => {
	return FETCH.put(`/user/update/${id}`, data);
};

export const deleteUser = id => {
	return FETCH.delete(`/user/delete/${id}`);
};

//user
export const createRole = data => {
	return FETCH.post(`/role/create`, data);
};

export const listRole = () => {
	return FETCH.get(`/role/get`);
};

export const getRoleById = id => {
	return FETCH.get(`/role/getRole/${id}`);
};

export const putRole = (id, data) => {
	return FETCH.put(`/role/update/${id}`, data);
};

export const deleteRole = id => {
	return FETCH.delete(`/role/delete/${id}`);
};
