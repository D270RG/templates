import React from 'react';
import ReactDOM from 'react-dom/client';
// import Page from './pages/grid-layout';
import Page from './pages/carousel-layout'
import NavPanel from './widgets/nav-panel/NavPanel';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavPanel text='light' bg='dark'/>
    <Page />
  </React.StrictMode>
);
