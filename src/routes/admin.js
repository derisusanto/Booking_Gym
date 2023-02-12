import React, { Suspense } from 'react';
import Absensi from '../pages/absensi';
import Category from '../pages/master/category';

const Schedule = React.lazy(() => import('../pages/schedule/schedule/index'));
const Class = React.lazy(() => import('../pages/master/class/index'));
const Location = React.lazy(() => import('../pages/master/location/index'));
const NewRegister = React.lazy(() => import('../pages/newRegister/index'));
const UploadPayment = React.lazy(() => import('../pages/uploadPayment/index'));
const Member = React.lazy(() => import('../pages/userData/member/index'));

const Room = React.lazy(() => import('../pages/master/room/index'));

// const Signup = React.lazy(() => import('../pages/absensi/'));

export const RouteAdmin = [
	{ path: '/', exact: true, element: <Absensi /> },

	{
		path: '/Schedule',
		element: <Schedule />
	},
	{
		path: '/Dashboard',
		element: <Absensi />
	},
	{
		path: '/Master/Category',
		element: <Category />
	},
	{
		path: '/Master/Class',
		element: <Class />
	},
	{
		path: '/Master/Location',
		element: <Location />
	},
	{
		path: '/Master/Room',
		element: <Room />
	},
	{
		path: '/Registration',
		element: <NewRegister />
	},
	{
		path: '/Upload',
		element: <UploadPayment />
	},
	{
		path: '/Userdata/Member',
		element: <Member />
	}
];
