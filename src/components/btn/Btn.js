import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './btn.scss';

const Btn = ({ content, className }) => (
	<button className={classNames('btn', className)}>
		{content}
	</button>
);


Btn.propTypes = {
	content: PropTypes.string,
	className: PropTypes.string,
};

Btn.defaultProps = {
	content: 'Submit',
};

export default Btn;
