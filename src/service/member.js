import FETCH from '../config/index';

export const listEventMemberById = memberId => {
	return FETCH.get(`/event/memberEvent/${memberId}`);
};

export const memberRegistEvent = data => {
	return FETCH.post(`/event/register/`, data);
};
