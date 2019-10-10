import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistReducer, persistStore } from 'redux-persist';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import SagaManager from './sagas';
import storage from 'redux-persist/lib/storage';

export const history = createBrowserHistory();
const router = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware({
    onError: error => {
        console.error(error);
        if (process.env.NODE_ENV === 'development') {
            console.error(error.message);
        }
    },
});
const middlewares = [sagaMiddleware, router];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const createReducer = reducer => {
    const rootPersistConfig = {
        key: 'root',
        storage,
        whitelist: [],
    };

    return persistReducer(rootPersistConfig, reducer(history));
};

export const store = createStore(createReducer(rootReducer), enhancer);

SagaManager.startSagas(sagaMiddleware);

export default () => {
    const persistor = persistStore(store);
    return { store, persistor };
};
