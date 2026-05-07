

import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Service from './components/Service'
import Footer from './components/Footer'
import Error from './components/Error'

function App() {

  

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
