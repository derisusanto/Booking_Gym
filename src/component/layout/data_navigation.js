import {
	UserOutlined,
	SnippetsOutlined,
	ScheduleOutlined,
	FundOutlined,
	ContactsOutlined,
	// BarChartOutlined,
	// FileAddOutlined,
	CalendarOutlined,
	CarryOutOutlined,
	SettingOutlined,
	CloudUploadOutlined,
	UsergroupAddOutlined
} from '@ant-design/icons';

const items = [
	{
		key: 'Dashboard',
		icon: <UserOutlined />,
		label: 'Dashboard'
	},
	{
		key: 'Schedule',
		icon: <ScheduleOutlined />,
		label: 'Schedule'
	},
	{
		key: '',
		icon: <SnippetsOutlined />,
		label: 'Master',
		children: [
			{
				key: 'Master/Category',
				label: 'Category'
			},
			{
				key: 'Master/Class',
				label: 'Class'
			},
			{
				key: 'Master/Room',
				label: 'Room'
			},
			{
				key: 'Master/Location',
				label: 'Location'
			}
		]
	},
	{
		key: 'User Data',

		icon: <UsergroupAddOutlined />,
		label: 'User Data',
		children: [
			{
				key: 'Userdata/Member',
				label: 'Member'
			},
			{
				key: 'Trainer',
				label: 'Trainer'
			}
		]
	},
	{
		key: 'Registration',
		icon: <ContactsOutlined />,
		label: 'New Registration'
	},
	{
		key: 'Report',
		icon: <FundOutlined />,
		label: 'Report'
	},
	{
		key: 'Setting',
		icon: <SettingOutlined />,
		label: 'Setting',
		children: [
			{
				key: 'User',
				label: 'User'
			},
			{
				key: 'Role',
				label: 'Role'
			},
			{
				key: 'Rekening',
				label: 'Rekening'
			}
		]
	},
	{
		key: 'Info Class',
		icon: <CalendarOutlined />,
		label: 'Info Class'
	},
	{
		key: 'Info Event',
		icon: <CarryOutOutlined />,
		label: 'Info Event'
	},
	{
		key: 'Upload',
		icon: <CloudUploadOutlined />,
		label: 'Upload'
	}
];
export default items;
