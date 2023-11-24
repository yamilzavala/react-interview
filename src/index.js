import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/user-context';
import { TableProvider } from './context/user-table-context';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <UserProvider>
        <TableProvider>
            <App />
        </TableProvider>
    </UserProvider>
);
