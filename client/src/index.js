import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Components/context/UserContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <AuthProvider>

  <Routes>

  <Route path='/*' element={<App />}> </Route>
  </Routes>

  </AuthProvider>

  </BrowserRouter>
   
 
);


