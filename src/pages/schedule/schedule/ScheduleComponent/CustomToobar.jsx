import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './custom.scss';

const CustomToolbar = toolbar => {
	return (
		<>
			{' '}
			<div className="rbc-toolbar">
				<span className="rbc-btn-group">
					<button type="button" onClick={() => toolbar.onNavigate('PREV')}>
						<LeftOutlined />
					</button>
					<button type="button" onClick={() => toolbar.onNavigate('NEXT')}>
						<RightOutlined />
					</button>
				</span>
				<button type="button" onClick={() => toolbar.onNavigate('TODAY')}>
					Today
				</button>
				<span className="rbc-toolbar-label">{toolbar.label}</span>
			</div>
			<hr />
		</>
	);
};

export default React.memo(CustomToolbar);
