import FETCH from '../config/index';

//registration

export const listReportRegistration = idLocation => {
	return FETCH.get(`/report/registrationReport/${idLocation}`);
};

export const listPresensiTrainer = idLocation => {
	return FETCH.get(`report/presensiTrainer/${idLocation}`);
};

export const listPresensiSiswa = idLocation => {
	return FETCH.get(`report/presensiSiswa/${idLocation}`);
};
