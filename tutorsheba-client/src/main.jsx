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

import PremiumTutors from './pages/PremiumTutors'
import TutorRequest from './pages/TutorRequest'
import Courese from './pages/Courese'
import TutionJobs from './pages/TutionJobs'
import TutorDetails from './pages/TutorDetails'


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
            <Route path="/tuttion_jobs" element={<TutionJobs />} />
            <Route path='/tutor-details/:id' element={<TutorDetails/>} />
            <Route path="/premium_tutors" element={<PremiumTutors />} />
            <Route path="/tutor_request" element={<TutorRequest />} />
            <Route path="/courses" element={<Courese/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
