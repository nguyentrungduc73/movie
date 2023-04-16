import React from 'react'
import styles from './Footer.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <ul className={cx('title')}>
          Phim chất lượng cao online của XemPhim khác gì so với các trang phim khác?
          <li className={cx('list-item')}>Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD (1080p), trong khi hầu hết các trang phim khác chỉ có tới độ phân giải HD (720p) là cao nhất</li>
          <li className={cx('list-item')}>Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD (1080p), trong khi hầu hết các trang phim khác chỉ có tới độ phân giải HD (720p) là cao nhất</li>
          <li className={cx('list-item')}>Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang phim khác (kể cả Youtube)</li>
          <li className={cx('list-item')}>Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải cao</li>
          <li className={cx('list-item')}>Có lựa chọn hiện phụ đề song ngữ (tức hiện đồng thời cả tiếng Anh & tiếng Việt), phù hợp với những người muốn học tiếng Anh qua phụ đề phim </li>
        </ul>
      </div>

    </div>
  )
}

export default Footer