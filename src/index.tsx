import React from 'react';

import ReactDOM from 'react-dom/client';

import App from 'app/App';
import 'styles/index.css';
import MenuButtonProvider from 'common/Menu/context/Provider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <MenuButtonProvider>
            <App />
        </MenuButtonProvider>
    </React.StrictMode>
);
