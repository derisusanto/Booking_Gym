import React from 'react';

const InfoClass = React.lazy(() => import('../pages/memberPage/infoClass'));
const InfoEvent = React.lazy(() =>
	import('../pages/memberPage/infoEvent/index')
);
const UploadPayment = React.lazy(() =>
	import('../pages/memberPage/uploadPayment/index')
);
const EventMember = React.lazy(() => import('../pages/memberPage/event/index'));

export const RouteMember = [
	{ path: '/', exact: true, element: <InfoClass /> },
	{
		path: 'Member/Info/Class',
		element: <InfoClass />
	},
	{
		path: '/Upload',
		element: <UploadPayment />
	},
	{
		path: '/Member/Info/Event',
		element: <InfoEvent />
	},
	{
		path: '/Member/Event',
		element: <EventMember />
	}
];
