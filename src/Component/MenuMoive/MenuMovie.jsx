import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './MenuMovie.module.scss'
import { Col, Row } from 'antd';
import ItemMovie from '../ItemMovie/ItemMovie';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles)

function MenuMovie({ data, title, category }) {
  console.log(data)


  return (
    <div className={cx('container')}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('list-movie')}>
        <Row gutter={[16, 16]} >
          {data?.map((item, index) => {
            return <Col key={index} xs={10} sm={6} md={4} lg={4} >
              <Link to={`/movieinfo/${item.id}`}>
                <ItemMovie dataMovie={item} />
              </Link>
            </Col>
          })}
        </Row>
      </div>
    </div>
  )
}

export default MenuMovie