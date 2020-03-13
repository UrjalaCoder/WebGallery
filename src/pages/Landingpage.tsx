import React from 'react'
import Login from '../components/Login'

interface LoginCredentials {
  username: string
  password: string
}

interface LandingpageProps {

}

function Landingpage() {

  const handleLogin = ({ password, username }: LoginCredentials) => {
    
  }

  return (
      <div className="pageContainer">
        <Login
          onSubmit={handleLogin}
        />
      </div>
  )
}

export default Landingpage
