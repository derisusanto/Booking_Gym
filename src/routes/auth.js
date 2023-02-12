import React from 'react';

const Signin = React.lazy(() => import('../pages/auth/signin/index'));
const Signup = React.lazy(() => import('../pages/auth/signup/index'));

export const RouteAuth = [
	{ path: '/', exact: true, element: <Signin /> },
	{ path: '/signin', element: <Signin /> },
	{ path: '/member/registered', element: <Signup /> }
];
