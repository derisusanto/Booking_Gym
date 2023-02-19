import { CustomModal } from '../../../../component/modal/customModal/customModal';

import { CloudUploadOutlined } from '@ant-design/icons';
import './detailEvent.scss';

export const DetailEvent = ({ show, onHide, imageURI, onChangeImage }) => {
	return (
		<CustomModal
			show={show}
			onHide={onHide}
			title="Details Event"
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
					<button className="btn btn-upload">Upload Image</button>
				</div>
			}
		/>
	);
};
