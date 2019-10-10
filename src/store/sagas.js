import appSaga from './App/app.saga';

const sagas = [...appSaga];

const SagaManager = {
	startSagas(sagaMiddleware) {
		sagas.forEach(saga => sagaMiddleware.run(saga));
	},
};

export default SagaManager;
