import React from 'react';

import InputRadio from '../../../../components/input-radio/InputRadio';
import InputCheck from '../../../../components/input-check/InputCheck';
import Btn from '../../../../components/btn/Btn';

export default () => (
	<div className="form-view">
		<h2>Form view</h2>
		<InputRadio checked />
		<InputCheck checked />
		<Btn />
	</div>
);
