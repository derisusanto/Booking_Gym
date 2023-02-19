import React from 'react';
import './custom.scss';

const CustomEvent = props => {
	const { title, event } = props;
	const { start, end } = event;

	const FormatTime = value => {
		try {
			let time = value?.toLocaleTimeString('en-US', { hour12: false });
			return time.slice(0, 5);
		} catch (err) {
			return value;
		}
	};

	return (
		<>
			<div
				className="w-100 z-100"
				style={{ fontSize: '13px', textAlign: 'center' }}
			>
				<small>
					{FormatTime(start)} - {FormatTime(end)}
				</small>
			</div>
			{/* content */}
			<div className="content-card">
				<div className="text-start">
					<div
						style={{
							backgroundColor: '#EDBB99',
							borderRadius: '8px',
							width: '100%',
							height: 'auto',
							padding: '8px 5px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						{title}
					</div>
					{/* <div className="event-title ">
						<span>&#128520;</span>: <span>{title}</span>
					</div>
					<div className="event-title">
						<span>&#128512;</span>: <span>2 dari 6</span>
					</div> */}
				</div>

				{/* <div className="participan">
					<div className={`color warning`}>
						3/<span className="max-capacity">9</span>
					</div>
				</div> */}
			</div>
		</>
	);
};

export default React.memo(CustomEvent);
