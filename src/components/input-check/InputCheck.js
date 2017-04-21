import React from 'react';
import PropTypes from 'prop-types';

const InputCheck = ({ label, checked, name, classes }) => (
<label className="checkbox">
	<input name={name} checked={checked} type="checkbox" value={label} className="checkbox__input" />
	<span className="checkbox__indicator" />
	<span className="checkbox__label">{label}</span>
</label>
);

InputCheck.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    classes: PropTypes.bool,
};


InputCheck.defaultProps = {
    label: 'default label value',
};

export default InputCheck;
