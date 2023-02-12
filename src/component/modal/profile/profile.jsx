import { useNavigate } from 'react-router-dom';
import './profile.scss';
const CustomModalProfile = () => {
	const navigate = useNavigate();

	const onLogout = () => {
		window.location.replace('/');
		localStorage.clear();
	};
	return (
		<div id="modal-profile" tabIndex="-1" className="overlay">
			<div
				className="social"
				role="dialog"
				aria-labelledby="modal-label"
				aria-hidden="true"
				onClick={onLogout}
			>
				<button>Profile</button>
				<button>Logout</button>
			</div>
			<a href="#" className="btn-close" aria-hidden="true">
				<span className="mdi mdi-close"></span>
				{/* <span className="sr-only">Close</span> */}
			</a>
		</div>
	);
};
export default CustomModalProfile;
