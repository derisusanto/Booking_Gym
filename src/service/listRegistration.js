import FETCH from '../config/index';

export const listNewMember = () => {
	return FETCH.get(`/member/newRegistration`);
};

export const changeClientTobeMember = clientId => {
	return FETCH.put(`/member/newMember/${clientId}`);
};
