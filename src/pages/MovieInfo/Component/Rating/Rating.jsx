import React, { useEffect, useState } from 'react'
import Star from '../../../../assets/image/star-on.webp'
import styles from './Rating.module.scss'
import classNames from 'classnames/bind'
import VoteService from '../../../../services/vote.service'
const cx = classNames.bind(styles)
function Rating({ idMovie }) {
  const [allRate, setAllRate] = useState(0)
  useEffect(() => {
    VoteService.searchByName(`movie='${idMovie}'`)
      .then(res => {
        console.log(12, res)
        let lastRate = 0
        res.data.items.forEach((item, index) => {
          lastRate += item.rate
        })
        setAllRate(lastRate / res.data.items.length)
      })
  }, [idMovie])
  return (
    <div>
      <p className={cx('ratting')}>Đánh giá : {allRate ? allRate.toFixed(1) : 5}
        <img src={Star} alt="" className={cx('star-ratting')} />
      </p>
    </div>
  )
}

export default Rating