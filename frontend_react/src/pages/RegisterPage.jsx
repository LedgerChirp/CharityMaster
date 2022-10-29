import React from 'react'
import Navbar from '../components/Navbar'
import Registerform from '../components/Registerform'


function RegisterPage() {
  return (
    <div>
      <Navbar className="top-0 absolute"/>
      <Registerform/> 
    </div>
  )
}

export default RegisterPage