import React, { useEffect } from 'react'
import UserService from '../../../../services/user.service';
import { AUTH_TOKEN } from '../../../../utils/constants';
import { useNavigate } from 'react-router-dom';

function redirect() {
  const nav = useNavigate()
  useEffect(() => {
    const redirectUrl = import.meta.env.VITE_REDIRECT_URL_LOCAL
    console.log(redirectUrl, 8)
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
        nav('/')

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