import React from 'react';
import PropTypes from 'prop-types';

const InputRadio = ({ label, checked, name, classes }) => (
	<label className="radio">
		<input name={name} checked={checked} type="radio" value={label} className="radio__input" />
		<span className="radio__indicator" />
		<span className="radio__label">{label}</span>
	</label>
);

InputRadio.propTypes = {
	label: PropTypes.string,
    name: PropTypes.string,
	checked: PropTypes.bool,
    classes: PropTypes.bool,
};

InputRadio.defaultProps = {
	label: 'default label value',
};

export default InputRadio;
