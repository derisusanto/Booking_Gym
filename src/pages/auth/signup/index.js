import React, { useState } from 'react';
import { message } from 'antd';
import { signUp } from '../../../service/auth';
import ScreenSignup from './screenSignup';

function Signup() {
	const [isEyes, setIsEyes] = useState(false);

	const onSetIsEyes = e => {
		const { checked } = e.target;
		setIsEyes(checked);
	};

	const onSubmit = (values, actions) => {
		signUp(values)
			.then(res => {
				if (res.status === 201) {
					actions.resetForm();
					message.success('Register Success');
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<ScreenSignup
			onSubmit={onSubmit}
			isEyes={isEyes}
			onSetIsEyes={onSetIsEyes}
		/>
	);
}
export default Signup;
