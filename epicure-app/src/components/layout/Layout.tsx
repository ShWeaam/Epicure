import Footer from 'components/footer/Footer'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chefs from '../chefs/Chefs'
import Dishes from '../dishes/Dishes'
import Header from '../headerComponents/Header'
import HomePage from '../homePage/HomePage'
import Resturants from '../resturants/Resturants'

export default function Layout() {
  return (

    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='resturants' element={<Resturants/>} />
        <Route path='chefs' element={<Chefs />} />
        <Route path='dishes' element={<Dishes />} />
        {/* <Route path='contactUs' element={<Dishes />} /> */}
        {/* <Route path='termsOfUse' element={<Dishes />} /> */}
        {/* <Route path='PrivacyPolicy' element={<Dishes />} /> */}
      </Routes>

      <Footer />

    </BrowserRouter>

  )
}
