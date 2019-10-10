import { combineReducers } from 'redux';
import app from './App/app.reducer';
import dashboard from './Dashboard/dashboard.reducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = history =>
    combineReducers({
        app,
        dashboard,
        router: connectRouter(history),
    });

export default rootReducer;
