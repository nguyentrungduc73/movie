import React, { useEffect, useState } from 'react'
import UserService from '../../../../services/user.service'
import classNames from 'classnames/bind';
import styles from './LoginSocial.module.scss'
import { FacebookIcon, IconGooGle } from '../../../../assets/icon/icon';
const cx = classNames.bind(styles)

function LoginSocial() {
  const [dataRender, setDataRender] = useState([])
  const redirectUrl = import.meta.env.VITE_REDIRECT_URL_LOCAL
  const getListAuth = async () => {
    try {
      const res = await UserService.listAuth()
      setDataRender(res.data.authProviders)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getListAuth()
  }, [])
  return (
    <>
      {dataRender.map((item, index) => {
        return <a style={{ color: 'black' }} href={item.authUrl + redirectUrl} onClick={() => {
          localStorage.setItem('provider', JSON.stringify(item))
        }} key={index}>
          <div className={cx('login-gg-box')}>
            <div className={item.name === 'google' ? cx('btn', 'btn-gg') : cx('btn', 'btn-fb')}>
              {item.name === 'google' ? <span>
                <IconGooGle style={{ width: '24px', height: '25px', fill: 'white', verticalAlign: 'sub' }} />
              </span> : <span>
                <FacebookIcon style={{ width: '24px', height: '25px', fill: 'white', verticalAlign: 'sub' }} />
              </span>}
              <span>Đăng nhập với {item.name}</span>
            </div>
          </div>
        </a>
      })}
    </>
  )
}

export default LoginSocial