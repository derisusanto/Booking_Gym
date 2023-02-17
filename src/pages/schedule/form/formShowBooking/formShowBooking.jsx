import React from 'react';
import { Row, Col } from 'antd';
import CustomSelect from '../../../../component/formInput/customWithOutFormik/customSelect';

import './formShowBooking.scss';
import { ICON } from '../../../../assets/icons/icons';

const FormShowBooking = ({ listClass, onSelectClass, onCheckRepeat }) => {
	return (
		<div id="form-show-booking">
			<div className="product-choose">
				<button className="product-name">Artisitik</button>
			</div>
			<div className="detail-product">
				<div className="list-detail-product">
					<ICON.CALENDAR />
					<span>Thursday. December 5 </span>{' '}
				</div>
				<div className="list-detail-product">
					<ICON.TIME_CIRCLE />
					<span>12:00 - 13:00</span>{' '}
				</div>
				<div className="list-detail-product">
					<ICON.MEMBERS />
					<span>6 Person</span>{' '}
				</div>
			</div>

			<Row gutter={16} className="add-members">
				<Col span={14} md={14}>
					<CustomSelect />
				</Col>
				<Col span={10} md={10}>
					<button className="button-add-member">
						<ICON.MEMBERS style={{ fill: '#fff' }} /> Add Member
					</button>
				</Col>
			</Row>

			<div className="list-member">
				<div className="member-detail">
					<span>Deri</span>
					<button>
						<ICON.DELETE />
					</button>
				</div>
				<div className="member-detail">
					<span>Deri</span>
					<button>
						<ICON.DELETE />
					</button>
				</div>
				<div className="member-detail">
					<span>Deri</span>
					<button>
						<ICON.DELETE />
					</button>
				</div>
			</div>
		</div>
	);
};
export default FormShowBooking;
