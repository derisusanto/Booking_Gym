import FETCH from '../config/index';

export const getScheduleById = idLocation => {
	return FETCH.get(`/schedule/getSchedule/${idLocation}`);
};

export const getClassByIdCategory = idCategory => {
	return FETCH.get(`/schedule/getClass/${idCategory}`);
};

export const createSchedule = data => {
	return FETCH.post(`/schedule/create`, data);
};

export const addMemberOnSchedule = data => {
	return FETCH.post(`/schedule/addMember`, data);
};

export const deleteMember = data => {
	return FETCH.put(`/schedule/deleteMember`, data);
};

export const detailScheduleById = idSchedule => {
	return FETCH.get(`/schedule/getDetail/${idSchedule}`);
};
