import React, { useState } from 'react'
import '../styles/contactFormStyle.css'

const ContactMeForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted')
    // setName('')
    // setEmail('')
    // setMessage('')
    name ? setName('') : setName(name)
    email ? setEmail('') : setEmail(email)
    message ? setMessage('') : setMessage(message)
  }

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'message') {
      setMessage(e.target.value)
    }
  }

  return (
    <div className='App'>
      <form id='form' className='topBefore' onSubmit={handleSubmit} method='POST'>
        <div className='form-group'>
          <label className='form-control-lbl' htmlFor='name'>Nombre</label>
          <input type='text' id='name' className='form-control' onChange={handleChange} placeholder='Tu nombre' />
        </div>
        <div className='form-group'>
          <label className='form-control-lbl' htmlFor='InputEmail'>Email address</label>
          <input type='email' id='email' className='form-control' aria-describedby='emailHelp' onChange={handleChange} placeholder='Tu correo' />
        </div>
        <div className='form-group'>
          <label className='form-control-lbl' htmlFor='message'>Mensaje</label>
          <textarea id='message' className='form-control-txt' rows='5' onChange={handleChange} placeholder='Escribe tu mensaje' />
        </div>
        <button type='submit' id='submit' className='btn btn-primary'>Enviar</button>
      </form>
    </div>
  )
}

export default ContactMeForm
