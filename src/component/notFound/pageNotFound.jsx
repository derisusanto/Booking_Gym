import { IMAGE } from '../../assets/images/images';
import './pageNotFound.scss';

const PageNotFound = () => {
	return (
		<div className="page-not-found" id="page-not-found">
			<div className="page-404">
				4<img src={IMAGE.NOTFOUND.IMG} />4
			</div>
			<div className="description-notfound">
				<h1>OOH! You're lost</h1>
				<span>
					The page you are lookinng does no exist. How you got here is a
					mystery. But you can click the button below to go back to the hompage.
				</span>
				<button>Home Page</button>
			</div>
		</div>
	);
};
export default PageNotFound;
