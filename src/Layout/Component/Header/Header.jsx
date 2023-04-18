import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import Logo from '../../../assets/logo/motchill.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import useScrollY from '../../../hooks/useScrollY'
import useUserInfo from '../../../hooks/useUserInfo'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

import { Dropdown, Space } from 'antd';
import UserService from '../../../services/user.service'

const cx = classNames.bind(styles)
function Header() {
  const [scrollY] = useScrollY()
  const infoUser = useUserInfo()
  console.log(infoUser, 18)
  const handleLogout = () => {
    UserService.signOut()
    window.location.href = '/'
  }
  const items = [
    {
      key: '1',
      label: (

        infoUser?.isAdmin && <Link to={'/admin'}>
          Trang Admin
        </Link>
      ),
    },
    {
      key: '4',

      label: (
        <p onClick={handleLogout}>log out</p>
      ),
    },
  ];






  return (
    <div className={scrollY < 50 ? cx('wrapper') : cx('wrapper-active')}>
      <div className={cx('nav-box')}>
        <div className={cx('nav-item', 'logo-box')}>
          <Link to={'/'}>

            <h1 className={cx('logo')}>PhimPal</h1>
          </Link>
        </div>
        <Link to={'/search'} className={cx('nav-item', 'search-box')}>
          <span>Tìm Kiếm</span>
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        <Link className={cx('nav-item')} to={'/category/Comedy'}>Phim Hài</Link>
        <Link className={cx('nav-item')} to={'/category/Romantic'}>Phim Tình Cảm</Link>
        <Link className={cx('nav-item')} to={'/category/Action'}>Phim Hành Động</Link>
        <Link className={cx('nav-item')} to={'/category/Anime'}>Phim Anime</Link>
      </div>
      <div>
        {infoUser ?

          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <p className={cx('user-name-box')}>{infoUser.email}</p>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          :
          <Link to={'/login'} className={cx('login-box')}>Login</Link>}
      </div>
    </div>
  )
}

export default Header