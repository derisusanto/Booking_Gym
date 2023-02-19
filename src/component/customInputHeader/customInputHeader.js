import './customHeader.scss';

const CustomInputHeader = ({ content, position }) => {
	return <div className={`header-component ${position}`}>{content}</div>;
};
export default CustomInputHeader;
