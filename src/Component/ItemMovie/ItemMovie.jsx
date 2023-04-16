import React from 'react'
import classNames from 'classnames/bind'
import styles from './ItemMovie.module.scss'
const cx = classNames.bind(styles)
function ItemMovie({ dataMovie }) {

  return (
    <div className={cx('box-movie')}>
      <div className={cx('box-img')}>
        <img src={dataMovie.poster} alt="" width='100%' />
      </div>
      <p className={cx('box-name')}>{dataMovie.namemovie}</p>
    </div>
  )
}

export default ItemMovie