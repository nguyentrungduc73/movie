import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './MovieInfo.module.scss'
import Star from '../../assets/image/star-on.webp'
import { FacebookIcon, Facebooklogo } from '../../assets/icon/icon'
import SuggestMovie from '../../Component/SuggestMovie/SuggestMovie'
import MovieService from '../../services/movie.service'
import { Link, useParams } from 'react-router-dom'
import Rating from './Component/Rating/Rating'
const cx = classNames.bind(styles)

function MovieInfo() {
  const { movieId } = useParams()
  const [dataRender, setDataRender] = useState({})
  useEffect(() => {
    MovieService.read(movieId, 'category , actor')
      .then(res => {
        console.log(res.data)
        setDataRender(res.data)
      })
  }, [movieId])
  const styleBackGround = {
    backgroundImage: `linear-gradient(to right bottom, rgba(4, 16, 30, 0.876), rgba(17, 24, 32, 0.817)), url(${dataRender.backGroundMovie})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('background-img-box')} style={styleBackGround}></div>
      <div className={cx('container')}>
        <div className={cx('movie-info-box')}>
          <div className={cx('left')}>
            <div className={cx('poster-box')}>
              <img src={dataRender.poster} alt="" width='100%' />
            </div>
            <Link className={cx('play-box')} to={`/watch/${dataRender.id}`}>
              <button className={cx('btn-play')}>Xem phim</button>
            </Link>
          </div>
          <div className={cx('right')}>
            <h1 className={cx('name-movie')}>{dataRender.namemovie}</h1>
            <h3 className={cx('sub-name')}>
              {dataRender.namemovie}
              <span className={cx('sub-year')}>({dataRender.year})</span>
            </h3>
            <p className={cx('total-time')}>Thời lượng : 1 Giờ 30 phút</p>
            <Rating idMovie={dataRender.id} />

            <div className={cx('share-and-tag')}>
              <div className={cx('share')}>
                <button className={cx('btn-share')}>
                  <span className={cx('icon-facebook')}>
                    <Facebooklogo style={{ width: '15px', height: '15px', marginRight: '10px' }} />
                  </span>
                  <span>Chia sẻ</span>
                </button>
              </div>
              <div className={cx('tag')}>
                {dataRender.expand?.category.map((tag, index) => {

                  return <div key={index} className={cx('tag-item')}>
                    {tag.categoryName}
                  </div>
                })}
              </div>
            </div>
            <div className={cx('more-info')}>
              <div className={cx('more-info-item')}>
                <p className={cx('more-info-item-title')}>Sáng lập </p>
                <p className={cx('more-info-item-content')}>Craig MazinNeil,  Druckmann</p>
              </div>
              <div className={cx('more-info-item')}>
                <p className={cx('more-info-item-title')}>Quốc gia </p>
                <p className={cx('more-info-item-content')}>Mỹ</p>
              </div>
              <div className={cx('more-info-item')}>
                <p className={cx('more-info-item-title')}>Phát hành </p>
                <p className={cx('more-info-item-content')}>
                  1/15/{dataRender.year}
                </p>
              </div>
              <div className={cx('more-info-des')}>
                {dataRender.des}
              </div>
              <div className={cx('more-info-actor-list')}>
                <p className={cx('actor-title')}>
                  Diễn Viên
                </p>
                <div className={cx('actor-box')}>
                  {dataRender.expand?.actor.map((item, index) => {
                    return <div className={cx('actor-item')} key={index}>
                      <img src={item.imgActor} alt="" className={cx('img-actor')} />
                      <p>{item.actorName}</p>
                    </div>
                  })}
                </div>
              </div>
              <SuggestMovie category={dataRender.expand?.category[0].categoryName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo