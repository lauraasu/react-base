const isPromise = val =>
	val && typeof val.then === 'function';


export default ({ dispatch }) => next => (action) => {
	if (!isPromise(action.payload)) {
		return next(action);
	}

	dispatch({
		...action,
		payload: null,
		isLoading: true,
		error: null,
	});

	return action.payload.then(
		(payload) => {
			dispatch({
				...action,
				payload,
				isLoading: false,
				error: null,
			});

			return Promise.resolve();
		},
		(error) => {
			dispatch({
				...action,
				payload: null,
				isLoading: false,
				error,
			});

			return Promise.reject(error);
		},
	);
};

export const getDefaultAsyncState = (info = {}) => ({
	isLoading: false,
	error: null,
	...info,
});
