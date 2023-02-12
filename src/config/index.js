import axios from 'axios';

export default axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlcmlAdHdlYWtpbmRvbmVzaWEuaWQiLCJpZCI6Mzk5OSwiaWF0IjoxNjY0NTE4ODc4fQ.gnF-vmp2Axc2Ls1bDar_XD4632_qA3LNsc8bldqCZJA`
	}
});
