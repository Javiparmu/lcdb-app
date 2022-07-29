import React, { Suspense } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import '../App.css'
import Home from '../Home'
import ProductDetail from './ProductDetail'
import Login from '../Login'
import { useProduct } from '../hooks/useProducts'
import { useUser } from '../hooks/useUser'

export default function Navbar () {
  const { products } = useProduct([])
  const { user, logout } = useUser()

  return (
    <Suspense fallback={<span>Loading component... </span>}>
      <div>
        <nav>
          <a href='/#' className='nav'>LCDB</a>
          <a href='/#productos' className='nav'>Productos</a>
          <a href='/#contacto' className='nav'>Contacto</a>
          {
            user
              ? <bdi id='nav-logout'>Bienvenid@, {user.username} <a className='nav' onClick={logout}>Logout</a></bdi>
              : <Link to='/login' className='nav'>Login</Link>
          }
        </nav>
        <Switch>
          <Route path='/products/:id'>
            <ProductDetail products={products} />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Suspense>
  )
}
