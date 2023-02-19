import { Col, Row } from 'antd';
import './formShowBooking.scss';

export const SkeletonShowBooking = props => {
	return (
		<div className="form-show-booking" id="form-show-booking">
			<div className="list-content">
				<div
					style={{
						width: '20%',
						height: '10px',
						borderRadius: '8px',
						backgroundColor: '#d3d3d3',
						opacity: 1,
						marginBottom: '5px'
					}}
				></div>
				<div
					style={{
						width: '100%',
						height: '150px',
						borderRadius: '8px',
						backgroundColor: '#d3d3d3',
						opacity: 1
					}}
				></div>
			</div>

			<Row gutter={16} className="add-members">
				<Col span={12} md={12}>
					<div
						style={{
							width: '100%',
							height: '40px',
							borderRadius: '8px',
							backgroundColor: '#d3d3d3',

							opacity: 1
						}}
					></div>
				</Col>
				<Col span={12} md={12}>
					<div
						style={{
							width: '100%',
							height: '40px',
							borderRadius: '8px',
							backgroundColor: '#d3d3d3',

							opacity: 1
						}}
					></div>
				</Col>
			</Row>
			<div
				style={{
					width: '100%',
					height: '40px',
					borderRadius: '8px',
					backgroundColor: '#d3d3d3',

					opacity: 1
				}}
			></div>
		</div>
	);
};
