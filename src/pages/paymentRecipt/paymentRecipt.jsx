import React from 'react';
import { CloudUploadOutlined } from '@ant-design/icons';

import './paymentRecipt.scss';

const PaymentRecipt = ({
	imageURI,
	registerNumber,
	onChangeImage,
	onChangeNumber,
	onUploadPayment
}) => {
	return (
		<React.Fragment>
			<div className="upload" id="upload">
				<div className="form-input">
					<input
						value={registerNumber}
						placeholder="input register number"
						onChange={e => onChangeNumber(e.target.value)}
					/>
				</div>

				<div className="box-upload">
					{imageURI ? (
						<img src={imageURI} alt="alt-img" name="img" />
					) : (
						<>
							<CloudUploadOutlined style={{ fontSize: '100px' }} />
							Select File
						</>
					)}
					<input type="file" onChange={e => onChangeImage(e)} />
				</div>
				<button
					className="btn btn-upload"
					disabled={!imageURI}
					onClick={onUploadPayment}
				>
					Upload Image
				</button>
			</div>
		</React.Fragment>
	);
};
export default PaymentRecipt;
