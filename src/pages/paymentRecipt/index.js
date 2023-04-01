import React, { useState } from 'react';
import { message } from 'antd';
import PaymentRecipt from './paymentRecipt';
import { memberUploadPayment } from '../../service/member';

const UploadPaymentRegister = () => {
	const [imageURI, setImageURI] = useState(null);
	const [image, setImage] = useState(null);
	const [registerNumber, setRegisterNumber] = useState(null);

	const handleImage = e => {
		let file = e.target.files[0];
		let reader = new FileReader();

		const { size, type } = file;

		if (!['image/jpeg', 'image/png', 'img/jpg'].includes(type)) {
			message.error('You can only upload JPG/PNG file!');
			setImageURI(null);
		} else if (file && size >= 2000000) {
			message.error('Image must smaller than 2MB!');
			setImageURI(null);
		} else {
			reader.onload = () => {
				setImageURI(URL.createObjectURL(file));
				setImage(file);
			};
			reader.readAsDataURL(file);
		}
	};

	const onUploadPayment = () => {
		var formData = new FormData();

		formData.append('file', image);
		formData.append('regNumber', registerNumber);

		memberUploadPayment(formData).then(res => {
			console.log(res);
		});
	};

	return (
		<React.Fragment>
			<PaymentRecipt
				imageURI={imageURI}
				registerNumber={registerNumber}
				onChangeNumber={setRegisterNumber}
				onChangeImage={handleImage}
				onUploadPayment={onUploadPayment}
			/>
		</React.Fragment>
	);
};
export default UploadPaymentRegister;
