import FETCH from '../config/index';
//member

//trainer
export const createTrainer = data => {
	return FETCH.post(`/trainer/create`, data);
};

export const listTrainer = () => {
	return FETCH.get(`/trainer/get`);
};

export const getTrainerById = id => {
	return FETCH.get(`/trainer/getTrainer/${id}`);
};

export const putTrainer = (id, data) => {
	return FETCH.put(`/trainer/update/${id}`, data);
};

export const deleteTrainer = id => {
	return FETCH.delete(`/trainer/delete/${id}`);
};
