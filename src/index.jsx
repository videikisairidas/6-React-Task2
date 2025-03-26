import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/css/main.css'; // Ensure you have global styles if needed

const container = document.getElementById('root');
const root = createRoot(container);  // Create a root

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

