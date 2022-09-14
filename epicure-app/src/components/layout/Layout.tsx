import Footer from 'components/footer/Footer'
import { APP_URLS } from 'constants/constants'
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
        <Route path={APP_URLS.HOME} element={<HomePage />} />
        <Route path={APP_URLS.RESTURANTS} element={<Resturants />} />
        <Route path={APP_URLS.CHEFS} element={<Chefs />} />
        <Route path={APP_URLS.DISHES} element={<Dishes />} />
        {/* <Route path='contactUs' element={<Dishes />} /> */}
        {/* <Route path='termsOfUse' element={<Dishes />} /> */}
        {/* <Route path='PrivacyPolicy' element={<Dishes />} /> */}
      </Routes>

      <Footer />

    </BrowserRouter>

  )
}
