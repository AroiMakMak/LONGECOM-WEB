// rafce
import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  //js

  return (
    <>
    <ToastContainer />
      <AppRoutes />
    </>
  )
}

export default App
