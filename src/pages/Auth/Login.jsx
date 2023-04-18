import React from 'react'

import styles from './Login.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
import { useFormik } from 'formik'
import { AUTH_TOKEN } from '../../utils/constants'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import UserService from '../../services/user.service'
import LoginSocial from './Component/LoginSocial/LoginSocial'


function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: yup.object({
      email: yup.string()
        .required("Required!")
        .email("Invalid email format"),
      password: yup.string()
        .required("Required!")
        .min(8, "Minimum 8 characters")
    }),
    onSubmit: async values => {
      const result = await UserService.signIn({
        identity: values.email,
        password: values.password
      })
      console.log(result)
      localStorage.setItem(AUTH_TOKEN, result.data.token)
      navigate("/")
    }
  })
  return (
    <div className={cx('wrapper')} >
      <div className={cx('container')}>
        <h1 className={cx('title')}>Đăng nhập</h1>
        <div className={cx('form-box')}>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <input type="email" name="email" id="" placeholder='Email' className={cx('inp')} value={formik.values.email} onChange={formik.handleChange} />
            </div>
            <div style={{ marginBottom: '36px' }}>
              <input type="password" name="password" id="" placeholder='Password' className={cx('inp')} value={formik.values.password} onChange={formik.handleChange} />
            </div>
            <div>
              <button className={cx('btn', 'btn-login')} type='submit'>Đăng Nhập</button>
            </div>
            <div className={cx('border-box')}></div>
            <div>
              <LoginSocial />
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}



{/* <div className={cx('login-gg-box')}>
<button className={cx('btn', 'btn-gg')}>
  <span>
    <IconGooGle style={{ width: '24px', height: '25px', fill: 'white', verticalAlign: 'sub' }} />
  </span>
  <span>Đăng nhập với Google</span>
</button>
</div>
<div className={cx('login-fb-box')}>
<button className={cx('btn', 'btn-fb')}>
  <span>
    <FacebookIcon style={{ width: '24px', height: '25px', fill: 'white', verticalAlign: 'sub' }} />
  </span>
  <span>Đăng nhập với Facebook</span>
</button>
</div> */}

export default Login