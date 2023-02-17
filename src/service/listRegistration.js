import FETCH from '../config/index';

export const listNewMember = () => {
	return FETCH.get(`/member/newRegistration`);
};
