import { message } from 'antd';
import React, { useState } from 'react';
import { signIn } from '../../../service/auth';
import ScreenSignin from './screenSignin';

function Signin() {
	const [isEyes, setIsEyes] = useState(false);

	const onSetIsEyes = e => {
		const { checked } = e.target;
		setIsEyes(checked);
	};

	const onSubmit = (values, actions) => {
		signIn(values)
			.then(res => {
				if (res.status === 200) {
					localStorage.setItem('token', res.data.token);
					window.location.replace('/');
					actions.resetForm();
					actions.setSubmitting(false);
					message.success(`Login Success, Please Waiting`);
				}
			})
			.catch(err => {
				actions.setSubmitting(false);
				message.error(`${err.response.data.message}`);
			});
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
