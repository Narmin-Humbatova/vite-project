import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// componentler gelecek
import Header from './components/Header'
import Notification from './components/Notification'
// import { Fragment } from 'react/jsx-runtime'
import { useEffect } from 'react'
// AOS Library
import AOS from "aos"
import 'aos/dist/aos.css'
// React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
// Home
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Shop from './pages/Shop'
import Mission from './pages/Mission'
import Faq from './pages/Faq'
import AlwaysPan from './pages/AlwaysPan'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <>
      <BrowserRouter>
      <Notification/>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shopping' element={<Shop/>} />
          <Route path='/always' element={<AlwaysPan/>} />
          <Route path='*' element={<NotFound/>} />
          <Route path='mission' element={<Mission/>} />
          <Route path='faq' element={<Faq/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
