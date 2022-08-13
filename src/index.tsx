import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Page from './pages/video-example'
import NavPanel from './widgets/nav-panel/NavPanel';
import { BrowserRouter,Route,Routes } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <NavPanel text='light' bg='dark'/>
      <Page />
    </BrowserRouter>
  </StrictMode>
);
