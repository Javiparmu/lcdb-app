import React from 'react'
import GoogleButton from 'react-google-button'
import { useGoogleLogout } from 'react-google-login'

const clientId = '81700748900-2b54n954amki8jp5tmudm9p8cf3td51p.apps.googleusercontent.com'

function useGLogout () {
  const onSuccess = (response) => {
    alert('Has cerrado tu cuenta correctamente ✌')
  }

  const onFailure = (response) => {
    console.log('Handle failure cases')
  }

  const { signOut } = useGoogleLogout({
    clientId,
    onSuccess,
    onFailure
  })

  return (
    <GoogleButton onClick={signOut} className='button' />
  )
}

export default useGLogout
