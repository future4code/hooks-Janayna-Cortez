import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import ListTripsPage from "../pages/ListTripsPage"
import ApplicationFormPage from "../pages/ApplicationFormPage"
import AdminHomePage from "../pages/AdminHomePage"
import ErrorPage from "../pages/ErrorPage"


function Router() {

    return (
  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/trips/list' element={<ListTripsPage />} />
      <Route path='/trips/application' element={<ApplicationFormPage />} />
      <Route path='/admin/trips/list' element={<AdminHomePage/>} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  )} 
  export default Router;
  