import { useGoogleLogin } from 'react-google-login'
import { refreshTokenSetup } from '../services/refreshTokenSetup'
import GoogleButton from 'react-google-button'
import { useState } from 'react'

const clientId = '81700748900-2b54n954amki8jp5tmudm9p8cf3td51p.apps.googleusercontent.com'

function useGLogin () {
  const [user, setUser] = useState(null)

  const onSuccess = (response) => {
    console.log('[Login Success] currentUser:', response.profileObj)
    setUser(response.profileObj)
    refreshTokenSetup(response)
  }

  const onFailure = (response) => {
    console.log('[Login Failed] res:', response)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline'
  })

  return (
    <div>
      {user
        ? ''
        : <GoogleButton onClick={signIn} className='button' />}
    </div>
  )
}

export default useGLogin
