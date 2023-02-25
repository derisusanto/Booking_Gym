import React, { useState } from 'react';
import { message, Image } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';

import './uploadPayment.scss';
import TitleComponent from '../../../component/titleComponent/titleComponent';

const UploadPayment = () => {
	const [imageURI, setImageURI] = useState(null);

	const handleImageTweakPass = e => {
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
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<React.Fragment>
			<TitleComponent title="Info Class" />
			<div className="upload" id="upload">
				<div className="box-upload">
					{imageURI ? (
						<img src={imageURI} alt="alt-img" name="img" />
					) : (
						<>
							<CloudUploadOutlined style={{ fontSize: '100px' }} />
							Select File
						</>
					)}
					<input type="file" onChange={e => handleImageTweakPass(e)} />
				</div>
				<button className="btn btn-upload" disabled={!imageURI}>
					Upload Image
				</button>
			</div>
		</React.Fragment>
	);
};
export default UploadPayment;
