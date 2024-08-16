import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar'
import Login from './components/Login';
import VerifyOtp from './components/VerifyOtp'
import SignUp from './components/Signup'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/>
      <Login/>
      <VerifyOtp/>
      <SignUp/>
      <Cart/>
      <Footer/> */}
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/verify' element={<VerifyOtp/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/mycart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
            <Footer/>
    </>
  )
}

export default App
