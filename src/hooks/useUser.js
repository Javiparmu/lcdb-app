import { useEffect, useState } from 'react'
import loginService from '../services/login'
import { useHistory } from 'react-router-dom'
import productService from '../services/products'

export function useUser () {
  const [user, setUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      productService.setToken(user.token)
    }
  }, [])

  const logout = () => {
    setUser(null)
    productService.setToken(null)
    window.localStorage.removeItem('loggedAppUser')
    history.go(0)
  }

  const login = async ({ username, password }) => {
    const user = await loginService.login({
      username,
      password
    })

    window.localStorage.setItem(
      'loggedAppUser', JSON.stringify(user)
    )

    productService.setToken(user.token)

    setUser(user)
    history.go(0)
  }
  return {
    user,
    logout,
    login
  }
}
