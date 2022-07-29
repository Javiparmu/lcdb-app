import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import LoginForm from './components/LoginForm.js'
import { useUser } from './hooks/useUser'
// import useGLogin from './hooks/useGLogin'
// import useGLogout from './hooks/useGLogout'
import './styles/loginStyle.css'

const Login = () => {
  // const [user, login, logout] = useUser()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const history = useHistory()

  //   const gLoginButton = useGLogin()
  //   const gLogoutButton = useGLogout()

  const { login } = useUser()

  // const googleLogin = useGLogin()

  const handleOnUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleOnPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = (event) => {
    event.preventDefault()
    try {
      login({ username, password })
      setUsername('')
      setPassword('')

      history.push('/')
    } catch (e) {
      setErrorMessage('Credenciales incorrectas')
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000)
    }
  }
  if (errorMessage) return <p>{errorMessage}</p>

  return (
    <div>
      {/* {googleLogin} */}
      <form onSubmit={handleLogin}>
        <p>
          <input type='text' onChange={handleOnUsernameChange} placeholder='Usuario' />
        </p>
        <p>
          <input type='password' onChange={handleOnPasswordChange} placeholder='Contraseña' />
        </p>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Login
