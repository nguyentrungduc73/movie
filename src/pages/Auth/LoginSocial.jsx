import React, { useEffect, useState } from 'react'
import UserService from '../../services/user.service'
import classNames from 'classnames/bind';
import styles from './LoginSocial.module.scss'
import { IconGooGle } from '../../assets/icon/icon';
const cx = classNames.bind(styles)

function LoginSocial() {
  const [dataRender, setDataRender] = useState([])
  const redirectUrl = 'http://127.0.0.1:5173/redirect';
  useEffect(() => {
    UserService.listAuth()
      .then(res => {
        console.log(res)
        setDataRender(res.data.authProviders
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      {dataRender.map((item, index) => {
        return <a style={{ color: 'black' }} href={item.authUrl + redirectUrl} onClick={() => {
          localStorage.setItem('provider', JSON.stringify(item))
        }}>
          <div className={cx('login-gg-box')}>
            <div className={cx('btn', 'btn-gg')}>
              <span>
                <IconGooGle style={{ width: '24px', height: '25px', fill: 'white', verticalAlign: 'sub' }} />
              </span>
              <span>Đăng nhập với {item.name}</span>
            </div>
          </div>
        </a>
      })}
    </>
  )
}

export default LoginSocial