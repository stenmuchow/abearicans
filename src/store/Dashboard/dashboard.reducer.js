import sites from './site-info.js';

const initialState = {
    sites,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;

export function getSites(state) {
    return state.dashboard && state.dashboard.sites;
}
