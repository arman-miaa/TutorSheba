import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter , Route, Routes } from 'react-router'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'
import Register from './pages/Register'
import { UserProvider } from './context/UserContext'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
