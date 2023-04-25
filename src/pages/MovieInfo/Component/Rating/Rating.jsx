import React, { useEffect, useState } from 'react'
import Star from '../../../../assets/image/star-on.webp'
import styles from './Rating.module.scss'
import classNames from 'classnames/bind'
import VoteService from '../../../../services/vote.service'
const cx = classNames.bind(styles)
function Rating({ idMovie }) {
  const [allRate, setAllRate] = useState(0)
  const getVoteRating = async () => {
    const res = await VoteService.searchByName(`movie='${idMovie}'`)
    let lastRate = 0
    res.data.items.forEach((item, index) => {
      lastRate += item.rate
    })
    setAllRate(lastRate / res.data.items.length)
  }
  useEffect(() => {
    getVoteRating()
  }, [idMovie])
  return (
    <div>
      <p className={cx('ratting')}>Đánh giá : {allRate ? allRate.toFixed(1) : 0}
        <img src={Star} alt="" className={cx('star-ratting')} />
      </p>
    </div>
  )
}

export default Rating