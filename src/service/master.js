import FETCH from '../config/index';

//category
export const createCategory = data => {
	return FETCH.post(`/category/create`, data);
};

export const listCategory = () => {
	return FETCH.get(`/category/get`);
};

export const putCategory = (id, data) => {
	return FETCH.put(`/category/update/${id}`, data);
};

export const deleteCategory = id => {
	return FETCH.delete(`/category/delete/${id}`);
};

//class

export const createClass = data => {
	return FETCH.post(`/class/create`, data);
};

export const listClass = () => {
	return FETCH.get(`/class/get`);
};

export const getClassById = id => {
	return FETCH.get(`/class/getClass/${id}`);
};

export const putClass = (id, data) => {
	return FETCH.put(`/class/update/${id}`, data);
};

export const deleteClass = id => {
	return FETCH.delete(`/class/delete/${id}`);
};

//location
export const createLocation = data => {
	return FETCH.post(`/location/create`, data);
};

export const listLocation = () => {
	return FETCH.get(`/location/get`);
};

export const getLocationById = id => {
	return FETCH.get(`/location/getLocation/${id}`);
};

export const putLocation = (id, data) => {
	return FETCH.put(`/location/update/${id}`, data);
};

export const deleteLocation = id => {
	return FETCH.delete(`/location/delete/${id}`);
};

//room
export const createRoom = data => {
	return FETCH.post(`/room/create`, data);
};

export const listRoom = () => {
	return FETCH.get(`/room/get`);
};

export const getRoomById = id => {
	return FETCH.get(`/room/getRoom/${id}`);
};

export const putRoom = (id, data) => {
	return FETCH.put(`/room/update/${id}`, data);
};

export const deleteRoom = id => {
	return FETCH.delete(`/room/delete/${id}`);
};

//Event
export const createEvent = data => {
	return FETCH.post(`/event/create`, data);
};

export const listEvent = () => {
	return FETCH.get(`/event/get`);
};

export const getEventById = id => {
	return FETCH.get(`/event/getEvent/${id}`);
};

export const putEvent = (id, data) => {
	return FETCH.put(`/event/update/${id}`, data);
};

export const deleteEvent = id => {
	return FETCH.delete(`/event/delete/${id}`);
};
