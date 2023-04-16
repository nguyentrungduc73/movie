import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'

import HomeCategory from './HomeCategory/Homecategory'
const cx = classNames.bind(styles)
function Home() {

  return (
    <div className={cx('wrapper')}>
      <HomeCategory title={'Phim Đề cử'} />
      <HomeCategory category={'Action'} title={'Phim hành đông'} />
      <HomeCategory category={"Romantic"} title={'Phim tình cảm'} />
      <HomeCategory category={"Comedy"} title={'Phim hài'} />
      <HomeCategory category={"Anime"} title={'Anime'} />

      <div className={cx('progressing-box')}>
        <p className={cx('progressing-box-title')}>Phim đang chờ xử lý</p>
        <div className={cx('progressing-box-content')}>
          <span className={cx('progressing-name')}>Ghost Wife </span>
          <span className={cx('progressing-year')}>(2018), </span>
          <span className={cx('progressing-name')}>Miss Danger  </span>
          <span className={cx('progressing-year')}>(2020), </span>
          <span className={cx('progressing-name')}>Looop Lapeta </span>
          <span className={cx('progressing-year')}>(2019), </span>
          <span className={cx('progressing-name')}>Maîtresse </span>
          <span className={cx('progressing-year')}>(2011), </span>
          <span className={cx('progressing-name')}>Kaiji 2: The Ultimate Gambler  </span>
          <span className={cx('progressing-year')}>(2022), </span>
          <span className={cx('progressing-name')}>Pure Art / Mortal Affair </span>
          <span className={cx('progressing-year')}>(2014), </span>
          <span className={cx('progressing-name')}>Golden Triangle Rescue  </span>
          <span className={cx('progressing-year')}>(2011), </span>
          <span className={cx('progressing-name')}>Somewhere Winter </span>
          <span className={cx('progressing-year')}>(2009), </span>
          <span className={cx('progressing-name')}>Tokyo Ghoul 'S'  </span>
          <span className={cx('progressing-year')}>(2013), </span>
          <span className={cx('progressing-name')}>The Sword Identity  </span>
          <span className={cx('progressing-year')}>(2004), </span>
          <span className={cx('progressing-name')}>The President's Man  </span>
          <span className={cx('progressing-year')}>(2018), </span>
          <span className={cx('progressing-name')}>Ghost Wife </span>
          <span className={cx('progressing-year')}>(2020), </span>
          <span className={cx('progressing-name')}>Ghost Wife </span>
          <span className={cx('progressing-year')}>(2018), </span>
          <span className={cx('progressing-name')}>Ghost Wife </span>
          <span className={cx('progressing-year')}>(2018), </span>
          <span className={cx('progressing-name')}>Ghost Wife </span>
          <span className={cx('progressing-year')}>(2018), </span>
        </div>

      </div>
    </div>
  )
}

export default Home