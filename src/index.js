import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/user-context';
import { TableProvider } from './context/user-table-context';
import { ThemeProvider } from './theory/theme-dark-light/context/theme';
import {BrowserRouter } from 'react-router-dom';
// import ReduxUserProvider from './theory/redux/example2-connect-mappers-actionsCreators/UserProvider';

// import ReduxUserProvider from './theory/redux/example1/UserProvider';


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    //  <ReduxUserProvider>

        <UserProvider>
            <TableProvider>
                <ThemeProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </TableProvider>
        </UserProvider>

    // </ReduxUserProvider>

);
