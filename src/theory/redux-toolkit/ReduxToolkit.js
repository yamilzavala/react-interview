import React from 'react';
import { Provider } from 'react-redux';
import {store} from './store/store';
import AppReduxToolkit from './components/AppReduxToolkit';
import './index.css'

const ReduxToolkit = () => {
    return (
        <Provider store={store}>
            <AppReduxToolkit/>
        </Provider>
    );
};

export default ReduxToolkit;