import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter , Route, Routes } from 'react-router'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
       
          <Route path="*" element={<ErrorPage />} />
      
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
