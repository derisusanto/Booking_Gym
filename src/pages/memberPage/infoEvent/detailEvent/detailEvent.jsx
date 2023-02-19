import { CustomModal } from '../../../../component/modal/customModal/customModal';
import './detailEvent.scss';

export const DetailEvent = ({ show, onHide, data, onRegister }) => {
	return (
		<CustomModal
			show={show}
			onHide={onHide}
			title="Details Event"
			content={
				<div id="detail-event">
					<h3>{data.event}</h3>
					<p>{data.description}</p>

					<div className="detail-time">
						<span>
							Date : {data.startDate} / {data.endDate}
						</span>
						<span>
							Price : <strong>{data.price}</strong>
						</span>
					</div>
				</div>
			}
			footer={
				<div className="btn-event-register">
					<button onClick={() => onRegister(data.id)}>Register</button>
				</div>
			}
		/>
	);
};
