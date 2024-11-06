import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from "./components/Cart";
//import RegisterPage from './components/RegisterPage';
//import LoginPage from './components/LoginPage';
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Cart />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </div>
  )
}

export default App
