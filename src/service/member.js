import FETCH from '../config/index';

export const listEventMemberById = memberId => {
	return FETCH.get(`/event/memberEvent/${memberId}`);
};

export const memberRegistEvent = data => {
	return FETCH.post(`/event/register/`, data);
};

export const uploadPaymentEventById = data => {
	return FETCH.post(`/event/upload`, data);
};

export const listInfoClass = idMember => {
	return FETCH.get(`/schedule/memberSchedule/${idMember}`);
};

export const memberUploadPayment = data => {
	return FETCH.post(`/member/upload`, data);
};
