import React from 'react';
import { Row, Col } from 'antd';
import CustomSelect from '../../../../component/formInput/customWithOutFormik/customSelect';

import './formShowBooking.scss';
import { ICON } from '../../../../assets/icons/icons';
import { FormatDate } from '../../../../utils/timeFormat';
import { SkeletonShowBooking } from './skeletonShowBooking';

const FormShowBooking = ({
	detailSchedule,
	listMember,
	onCheckMember,
	onSetMember,
	members,
	deleteMemberOnSchedule,
	isLoadingForm
}) => {
	return (
		<React.Fragment>
			{isLoadingForm ? (
				<SkeletonShowBooking />
			) : (
				<div id="form-show-booking">
					<div className="product-choose">
						<button className="product-name">{detailSchedule.class}</button>
					</div>
					<div className="detail-product">
						<div className="list-detail-product">
							<ICON.CALENDAR />
							<span>
								{FormatDate(new Date(detailSchedule.classDate))}{' '}
							</span>{' '}
						</div>
						<div className="list-detail-product">
							<ICON.TIME_CIRCLE />
							<span>
								{detailSchedule.startTime?.slice(0, 5)} -{' '}
								{detailSchedule.endTime?.slice(0, 5)}
							</span>{' '}
						</div>
						<div className="list-detail-product">
							<ICON.MEMBERS />
							<span>{members.length} Person</span>{' '}
						</div>
						<div className="list-detail-product">
							<ICON.MEMBERS />
							<span>{detailSchedule.trainer}</span>{' '}
						</div>
					</div>

					<Row gutter={16} className="add-members">
						<Col span={14} md={14}>
							<CustomSelect options={listMember} onChange={onCheckMember} />
						</Col>
						<Col span={10} md={10}>
							<button
								className="button-add-member"
								onClick={() => onSetMember(detailSchedule.scheduleId)}
							>
								<ICON.MEMBERS style={{ fill: '#fff' }} /> Add Member
							</button>
						</Col>
					</Row>
					{members.length > 0 ? (
						<div className="list-member">
							{members.map((member, index) => {
								return (
									<div className="member-detail" key={index}>
										<span>{member.member?.childName}</span>
										<button>
											<ICON.DELETE
												onClick={() =>
													deleteMemberOnSchedule(
														member.member.id,
														detailSchedule.scheduleId
													)
												}
											/>
										</button>
									</div>
								);
							})}
						</div>
					) : (
						<div className="member-empty">No Member</div>
					)}
				</div>
			)}
		</React.Fragment>
	);
};
export default FormShowBooking;
