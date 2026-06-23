import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import App from './App.jsx';
import { NotificationProvider } from './context/NotificationContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
      <Analytics />
    </NotificationProvider>
  </React.StrictMode>
);
