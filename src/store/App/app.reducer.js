import { APP_SET_INITIALIZED } from './app.action';

const initialState = {
	appInitialized: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case APP_SET_INITIALIZED:
			return {
				...state,
				appInitialized: true,
			};
		default:
			return state;
	}
};

export default appReducer;

export function appIsInitialized(state) {
	return state.app && state.app.appInitialized;
}
