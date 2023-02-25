import React from 'react';
import Absensi from '../pages/absensi';
import Category from '../pages/master/category';

const Dashboard = React.lazy(() => import('../pages/dashboard/index'));

const ScheduleLocation = React.lazy(() =>
	import('../pages/schedule/listLocation/index')
);
const Schedule = React.lazy(() => import('../pages/schedule/index'));

const Class = React.lazy(() => import('../pages/master/class/index'));
const Location = React.lazy(() => import('../pages/master/location/index'));
const Room = React.lazy(() => import('../pages/master/room/index'));
const Event = React.lazy(() => import('../pages/master/event/index'));

const NewRegister = React.lazy(() => import('../pages/newRegister/index'));

const Member = React.lazy(() => import('../pages/userData/member/index'));
const Trainer = React.lazy(() => import('../pages/userData/trainer/index'));

const User = React.lazy(() => import('../pages/setting/user/index'));
const Role = React.lazy(() => import('../pages/setting/role/index'));

export const RouteAdmin = [
	{ path: '/', exact: true, element: <Dashboard /> },

	{
		path: '/Schedule/Location',
		element: <ScheduleLocation />
	},
	{
		path: '/Schedule/:idLocation',
		element: <Schedule />
	},
	{
		path: '/Dashboard',
		element: <Dashboard />
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
		path: '/Master/Event',
		element: <Event />
	},
	{
		path: '/Registration',
		element: <NewRegister />
	},

	{
		path: '/Userdata/Member',
		element: <Member />
	},
	{
		path: '/Userdata/Trainer',
		element: <Trainer />
	},
	{
		path: '/Setting/User',
		element: <User />
	},
	{
		path: '/Setting/Role',
		element: <Role />
	}
];
