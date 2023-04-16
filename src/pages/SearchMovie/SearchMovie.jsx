import React, { useEffect, useState } from 'react'
import styles from './SearchMovie.module.scss'
import classNames from 'classnames/bind'
import MenuMovie from '../../Component/MenuMoive/MenuMovie'
import MovieService from '../../services/movie.service'
import useDebounce from '../../hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Spin } from 'antd'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)

function SearchMovie() {

  const [searchParams, setSearchParams] = useSearchParams()

  const [dataRender, setDataRender] = useState([])

  const [loading, setLoading] = useState(true)


  const debounced = useDebounce(searchParams.get('phim'), 1000)
  useEffect(() => {
    console.log(searchParams)

    setLoading(true)


    MovieService.searchByName(`namemovie~'${debounced}'`)
      .then(res => {
        console.log(res)
        setDataRender(res.data.items)
        setLoading(false)
      }).catch(error => {
        console.log(error)
        setLoading(false)
      })

  }, [debounced])
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('search-box')}>
          <input type="text" name="" id="" className={cx('inp-search')} placeholder='Nhập tên phim' onChange={(e) =>
            setSearchParams({
              phim: e.target.value
            })}
          />
          {loading && <div className={cx('spinner')}>
            <FontAwesomeIcon icon={faSpinner} />
          </div>}
        </div>
        <div className={cx('result-title')}>
          {dataRender.length !== 0 && <span>Kết quả tìm kiếm :</span>}
        </div>
        <div className=''>
          <MenuMovie data={dataRender} />
        </div>
      </div>
    </div>
  )
}

export default SearchMovie