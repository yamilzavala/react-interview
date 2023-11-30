import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/user-context';
import { TableProvider } from './context/user-table-context';
import { ThemeProvider } from './theory/theme-dark-light/context/theme';
import {BrowserRouter } from 'react-router-dom';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <UserProvider>
        <TableProvider>
            <ThemeProvider>
                <BrowserRouter>
                    <App />                
                </BrowserRouter>
            </ThemeProvider>
        </TableProvider>
    </UserProvider>
);
