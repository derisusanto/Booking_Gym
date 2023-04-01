import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { signUp } from '../../../service/auth';
import ScreenSignup from './screenSignup';
import {
	listCategoryPublict,
	listLocationPublict
} from '../../../service/service';

function Signup() {
	const [isEyes, setIsEyes] = useState(false);
	const [listLocations, setListLocations] = useState([]);
	const [listCategories, setListCategories] = useState([]);

	useEffect(() => {
		getListLocations();
		getListCategories();
	}, []);

	const onSetIsEyes = e => {
		const { checked } = e.target;
		setIsEyes(checked);
	};

	const getListLocations = () => {
		listLocationPublict().then(res => {
			if (res.status === 200) {
				const dataTemp = res.data.data.map(location => ({
					label: location.nama,
					value: location.id
				}));
				setListLocations(dataTemp);
			}
		});
	};

	const getListCategories = () => {
		listCategoryPublict().then(res => {
			if (res.status === 200) {
				const dataTemp = res.data.data.map(category => ({
					label: category.nama,
					value: category.id
				}));
				setListCategories(dataTemp);
			}
		});
	};

	const onSubmit = (values, actions) => {
		signUp(values)
			.then(res => {
				if (res.status === 201) {
					actions.resetForm();
					actions.setSubmitting(false);
					message.success('Register Success');
				}
			})
			.catch(err => {
				message.error(`${err.response.data.message}`);
				actions.setSubmitting(false);
			});
	};

	return (
		<ScreenSignup
			onSubmit={onSubmit}
			isEyes={isEyes}
			onSetIsEyes={onSetIsEyes}
			listCategories={listCategories}
			listLocations={listLocations}
		/>
	);
}
export default Signup;
