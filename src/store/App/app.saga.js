import { put, takeLatest, delay } from 'redux-saga/effects';
import actions, { APP_INIT } from './app.action';

function* appInitWorker() {
    // yield delay(2000);
    yield put(actions.setAppStatusInitialized());
}

export function* appInitListener() {
    yield takeLatest(APP_INIT, appInitWorker);
}

export default [appInitListener];
