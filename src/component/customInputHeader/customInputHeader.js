import { Form, Formik } from 'formik';
import { oneSchema } from '../../schemas/index';

import CustomInput from '../../component/formInput/customInput';

import './customHeader.scss';

const CustomInputHeader = ({ content, position }) => {
	return <div className={`header-component ${position}`}>{content}</div>;
};
export default CustomInputHeader;
