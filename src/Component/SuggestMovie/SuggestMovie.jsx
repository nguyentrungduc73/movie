import React, { useEffect, useState } from 'react'

import MovieService from '../../services/movie.service'
import Silder from '../Slider/Silder'
import classNames from 'classnames/bind'
import styles from './SuggestMovie.module.scss'
import MenuMovie from '../MenuMoive/MenuMovie'



const cx = classNames.bind(styles)
function SuggestMovie({ category }) {
  console.log(category)

  const [dataRender, setDataRender] = useState([])
  useEffect(() => {
    MovieService.searchByCategory(`category.categoryName?='${category}'`, 'category')
      .then(res => {
        console.log(res)
        setDataRender(res.data.items.splice(0, 6))
      })
  }, [category])

  return (
    <div className={cx('wrapper')}>
      <p className={cx('title')}>Phim cùng thể loại</p>
      <MenuMovie data={dataRender} />
    </div>
  )
}

export default SuggestMovie