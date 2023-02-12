import React, { useState } from 'react';
import ScreenSignin from './screenSignin';

function Signin() {
	const [isEyes, setIsEyes] = useState(false);

	const onSetIsEyes = e => {
		const { checked } = e.target;
		setIsEyes(checked);
	};

	const onSubmit = async (values, actions) => {
		await new Promise(resolve => setTimeout(resolve, 2000));
		localStorage.setItem('token', 'login');
		actions.resetForm();
		window.location.replace('/');
	};

	return (
		<ScreenSignin
			onSubmit={onSubmit}
			isEyes={isEyes}
			onSetIsEyes={onSetIsEyes}
		/>
	);
}
export default Signin;
