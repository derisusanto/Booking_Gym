import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './custom.scss';

const CustomToolbar = toolbar => {
	return (
		<>
			{' '}
			<div className="toolbar">
				<span className="rbc-btn-prev-next">
					<button
						type="button"
						className="btn-next"
						onClick={() => toolbar.onNavigate('PREV')}
					>
						<LeftOutlined style={{ color: '#fff' }} />
					</button>
					<button
						type="button"
						className="btn-next"
						onClick={() => toolbar.onNavigate('NEXT')}
					>
						<RightOutlined style={{ color: '#fff' }} />
					</button>
				</span>
				<button
					type="button"
					className="btn-today"
					onClick={() => toolbar.onNavigate('TODAY')}
				>
					Today
				</button>
				<div className="rbc-toolbar-label">
					<span>{toolbar.label}</span>
				</div>
			</div>
			<hr />
		</>
	);
};

export default React.memo(CustomToolbar);
