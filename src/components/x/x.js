import React from 'react';
import { ChildrenShape } from '../../constants/shapes';

const DataTable = ({ label }) => (
	<label className="radio {{classes ? classes : ''}}">
		<input name="{{name}}" v-model="model" checked="{{checked}}" type="radio" value="{{label}}"  class="radio__input">
			<span class="radio__indicator"></span>
			<span class="radio__label"  v-if="label">{{label}}</span>
	</label>
);

DataTable.propTypes = {
	children: ChildrenShape,
};

export default DataTable;
