import React, { useEffect, useState } from 'react'
import MovieService from '../../services/movie.service'
import classNames from 'classnames/bind'
import styles from './Watch.module.scss'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { BackIcon, Facebooklogo } from '../../assets/icon/icon'

import CommentMovie from './Component/Comment/CommentMovie'
import SuggestMovie from '../../Component/SuggestMovie/SuggestMovie'
import Voting from './Component/Voting/Voting'
import DarkModeToggle from '../../Component/DarkMode/DarkMode'
import useUserInfo from '../../hooks/useUserInfo'

const cx = classNames.bind(styles)
function Watch() {
  const infoUser = useUserInfo()
  const currentUrl = window.location.href
  console.log(currentUrl, 117)
  const { movieId } = useParams()
  const [dataRender, setDataRender] = useState({})
  useEffect(() => {
    MovieService.read(movieId, 'category')
      .then(res => {
        console.log(res)
        setDataRender(res.data)
      })
  }, [movieId])
  return (
    <div className={cx('wrapper')}>
      <div className={cx('screen-box')} id='special'>
        <ReactPlayer
          url={dataRender.video}
          width="100%"
          height="70vh"
          playing={false}
          controls={true} />
      </div>
      <div className={cx('container')}>
        <p className={cx('para')}>Phim không có tiếng/mất tiếng nhân vật/ âm thanh bị rè? <span className={cx('sub-para')}>xem hướng dẫn</span> </p>
        <div className={cx('movie-info-box')}>
          <div className={cx('left')}>
            <h2 className={cx('name-movie')}>
              {dataRender.namemovie}
            </h2>
            <h4 className={cx('sub-name')}>
              {dataRender.namemovie}
              <span className={cx('sub-para')}>
                ({dataRender.year})
              </span>
            </h4>
            <div className={cx('share')}>
              <button className={cx('btn-share')}>
                <span className={cx('icon-facebook')}>
                  <Facebooklogo style={{ width: '15px', height: '15px', marginRight: '10px' }} />
                </span>
                <div class="fb-share-button" data-href={currentUrl} data-layout="" data-size=""><a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%3A5173%2Fwatch%2F${movieId}&amp;src=sdkpreparse`} class="fb-xfbml-parse-ignore">
                  chia sẻ</a></div>
              </button>
            </div>
          </div>
          <div className={cx('right')}>
            <Link className={cx('navigate-box')} to={`/movieInfo/${dataRender.id}`} >
              <BackIcon style={{ fill: '#fff', width: '26px' }} />
              <span className={cx('nav-text')}>Quay về trang thông tin phim</span>
            </Link>
            <Voting idMovie={dataRender.id} />
            <DarkModeToggle />
          </div>
        </div>
        {
          infoUser ? null : <div className={cx('suggest-to-login')}>
            <p>Nếu muốn comment hay đánh giá về bộ phim vui lòng đăng nhập</p>
            <Link className={cx('btn-login-box')} to={"/login"} >
              <p>Đăng nhập</p>
            </Link>
          </div>
        }
        <div className={cx('comment-and-suggestmovie')}>
          <div className={cx('comment-box')}>
            <CommentMovie idMovie={dataRender.id} />
          </div>
          <div className={cx('suggest-movie')}>
            <SuggestMovie category={dataRender.expand?.category[0].categoryName} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Watch