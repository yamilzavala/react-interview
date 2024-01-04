import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/user-context';
import { TableProvider } from './context/user-table-context';
import { ThemeProvider } from './theory/theme-dark-light/context/theme';
import {BrowserRouter } from 'react-router-dom';
// import ReduxUserProvider from './theory/redux/example2-connect-mappers-actionsCreators/UserProvider';
// import ReduxUserProvider from './theory/redux/example1/UserProvider';
//import {store} from './theory/redux-toolkit-Stephen-Grider/store'
// import { store } from './theory/redux-toolkit-thunks-Stephen-Grider/store';
import { store } from './theory/redux-toolkit-multiple-slices/store'
import { Provider } from 'react-redux';
import {NavigationProvider} from './theory/navigation-Stephen-Grider/context/navigation'


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    //  <ReduxUserProvider>
        <Provider store={store}>
            <NavigationProvider>
                <UserProvider>
                    <TableProvider>
                        <ThemeProvider>
                            <BrowserRouter>
                                <App />
                            </BrowserRouter>
                        </ThemeProvider>
                    </TableProvider>
                </UserProvider>
            </NavigationProvider>
        </Provider>

    // </ReduxUserProvider>

);
