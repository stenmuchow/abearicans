import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './styles/1-settings/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';
import BaseStyles from './base-styles';
import AppStartup from './components/AppStartup/AppStartup';
import AppReadyWaiter from './components/AppReadyWaiter/AppReadyWaiter';
import getStoreAndPersistor, { history } from './store/store';

const { store, persistor } = getStoreAndPersistor();

const render = Component => {
    return ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <PersistGate persistor={persistor}>
                    <BaseStyles />
                    <AppStartup />
                    <ConnectedRouter history={history}>
                        <AppReadyWaiter>
                            <Component />
                        </AppReadyWaiter>
                    </ConnectedRouter>
                </PersistGate>
            </ThemeProvider>
        </Provider>,
        document.getElementById('root')
    );
};

render(App);
