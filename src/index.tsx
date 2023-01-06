import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { FormspreeProvider } from '@formspree/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <FormspreeProvider project="xrgvglrd"> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </FormspreeProvider> */}
  </React.StrictMode>
);
