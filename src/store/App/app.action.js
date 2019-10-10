export const APP_INIT = 'APP_INIT';
export const APP_SET_INITIALIZED = 'APP_SET_INITIALIZED';

const actions = {
	appInit() {
		return {
			type: APP_INIT,
		};
	},
	setAppStatusInitialized() {
		return {
			type: APP_SET_INITIALIZED,
		};
	},
};

export default actions;
