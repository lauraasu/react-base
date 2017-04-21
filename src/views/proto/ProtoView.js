import React from 'react';
import { Link, Route } from 'react-router-dom';
import { RouterMatchShape } from '../../constants/shapes';

import InputRadio from '../../components/input-radio/InputRadio';
import InputCheck from '../../components/input-check/InputCheck';

import FormView from './children/form/FormView';

const UigView = ({ match }) => (
	<div className="uig-view">
		<h1>Uig view</h1>

		<Input-radio>
			header contents
		</Input-radio>

		<ul className="nav">
			<li>
				<Link to={`${match.url}/form`}>Form</Link>
			</li>
		</ul>
		<div className="child-view">
			<Route path={`${match.url}/form`} component={FormView} />
		</div>
	</div>
);

UigView.propTypes = {
	match: RouterMatchShape,
};

export default UigView;
