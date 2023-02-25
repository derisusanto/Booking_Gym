import { CustomModal } from '../../../../component/modal/customModal/customModal';

import { CloudUploadOutlined } from '@ant-design/icons';
import './uploadPayment.scss';
import { IsNullOrEmpty } from '../../../../utils/IsNullOrEmpety';

export const UploadPayment = ({
	show,
	onHide,
	imageURI,
	onChangeImage,
	onpaymentEvent
}) => {
	return (
		<CustomModal
			show={show}
			onHide={onHide}
			title="Upload Payment Event"
			content={
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
						<input type="file" onChange={onChangeImage} />
					</div>
					<button
						className="btn btn-upload"
						onClick={onpaymentEvent}
						disabled={IsNullOrEmpty(imageURI) ? true : false}
					>
						Upload Image
					</button>
				</div>
			}
		/>
	);
};
