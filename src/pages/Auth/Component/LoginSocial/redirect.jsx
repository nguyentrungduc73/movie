import React, { useEffect } from 'react'
import UserService from '../../../../services/user.service';
import { AUTH_TOKEN } from '../../../../utils/constants';
import { useNavigate } from 'react-router-dom';

function redirect() {
  const nav = useNavigate()

  const authWithOauth2 = async () => {
    const redirectUrl = import.meta.env.VITE_REDIRECT_URL_LOCAL
    console.log(redirectUrl, 8)
    const params = (new URL(window.location)).searchParams;
    const provider = JSON.parse(localStorage.getItem('provider'))
    const res = await UserService.authWithOauth2(
      {
        provider: provider.name,
        code: params.get('code'),
        codeVerifier: provider.codeVerifier,
        redirectUrl: redirectUrl,

      }
    )
    localStorage.setItem(AUTH_TOKEN, res.data.token)
    nav('/')
  }
  useEffect(() => {
    authWithOauth2()

  }, [])

  return (
    <div>Chờ 1 tí</div>
  )
}

export default redirect