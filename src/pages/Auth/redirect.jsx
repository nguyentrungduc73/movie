import React, { useEffect } from 'react'
import UserService from '../../services/user.service';
import { AUTH_TOKEN } from '../../utils/constants';

function redirect() {
  useEffect(() => {
    const redirectUrl = 'http://127.0.0.1:5173/redirect';
    const params = (new URL(window.location)).searchParams;
    const provider = JSON.parse(localStorage.getItem('provider'))

    UserService.authWithOauth2(
      {
        provider: provider.name,
        code: params.get('code'),
        codeVerifier: provider.codeVerifier,
        redirectUrl: redirectUrl,

      }
    )
      .then(res => {
        console.log(res)
        localStorage.setItem(AUTH_TOKEN, res.data.token)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>Chờ 1 tí</div>
  )
}

export default redirect