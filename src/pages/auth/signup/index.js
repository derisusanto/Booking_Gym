import React, { useState } from 'react';
import ScreenSignup from './screenSignup';

function Signup() {
	const [isEyes, setIsEyes] = useState(false);

	const onSetIsEyes = e => {
		const { checked } = e.target;
		setIsEyes(checked);
	};

	const onSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
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
