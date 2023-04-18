import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from "./CommentMovie.module.scss"
import { CommentIcon } from '../../../../assets/icon/icon'
import CommentService from '../../../../services/comment.service'
import useUserInfo from '../../../../hooks/useUserInfo'
import { useNavigate } from 'react-router-dom'
const cx = classNames.bind(styles)
function CommentMovie({ idMovie }) {
  const nav = useNavigate()
  const [listComment, setListComment] = useState([])
  const textAreaRef = useRef()
  const infoUser = useUserInfo()
  const [newComment, setNewComment] = useState(false)
  const [errorComment, setErrorComment] = useState(false)

  useEffect(() => {
    CommentService.searchByCategory(`movie='${idMovie}'`, 'users')
      .then(res => {
        setListComment(res.data.items)
      }).catch(error => {
        console.log(error)
      })
  }, [idMovie, newComment])
  const handleSubmitComment = (event) => {
    event.preventDefault()
    if (infoUser) {
      if (textAreaRef.current.value.trim().length !== 0) {
        setErrorComment(false)
        CommentService.create({
          content: textAreaRef.current.value,
          movie: idMovie,
          users: infoUser.id
        })
          .then(res => {
            textAreaRef.current.value = ""
            setNewComment(false)
          })
          .catch(error => {
            console.log(error)
          })
      }
      else {
        setErrorComment(true)
      }

    } else {
      nav('/login')
    }
    setNewComment(true)
  }
  const handleDeleteComment = (id) => {
    CommentService.delete(id)
      .then(res => {
        console.log(res)
        setNewComment(false)
      })
      .catch((error) => {
        console.log(error)

      })
    setNewComment(true)
  }

  function convertTimeToVN(timeStr) {
    // Chuyển chuỗi thời gian thành đối tượng Date
    const timeUtc = new Date(timeStr);

    // Chuyển đổi múi giờ sang GMT+7
    const timeVn = new Date(timeUtc.getTime() + (7 * 60 * 60 * 1000));

    // Định dạng lại chuỗi thời gian theo định dạng mong muốn
    const hours = timeVn.getUTCHours().toString().padStart(2, '0');
    const minutes = timeVn.getUTCMinutes().toString().padStart(2, '0');
    const day = timeVn.getUTCDate().toString().padStart(2, '0');
    const month = (timeVn.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = timeVn.getUTCFullYear().toString();

    const timeVnStr = `${hours}:${minutes} ${day}.${month}.${year}`;

    return timeVnStr;
  }


  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>
        <CommentIcon style={{ fill: '#7a7a7a', width: '26px' }} />
        Bình Luận Phim
      </h2>

      <div className={cx('comment-box')}>
        {listComment.map((comment, index) => {
          const VnTime = convertTimeToVN(comment.created)
          console.log('abcd', comment.create)
          return <div className={cx('comment-item')} key={index}>
            <div className={cx('name-and-time')}>
              <p className={cx('name-user')}>{comment.expand?.users.email}</p>
              <p className={cx('time-comment')}>{VnTime}</p>
            </div>
            <p className={cx('content-comment')}>{comment.content}</p>
            {
              infoUser?.id === comment.users ? <div className={cx('btn-delete-comment')} onClick={() => handleDeleteComment(comment.id)} >x</div> : null
            }
          </div>
        })}
      </div>

      <form onSubmit={handleSubmitComment}>
        <div>
          <textarea className={cx('text-area')} placeholder='Nhập bình luận ...' ref={textAreaRef}>
          </textarea>
          {errorComment && <p>Vui lòng không để trống comment</p>}
        </div>
        <div className={cx('btn-box')}>
          <button type='submit' className={cx('btn-send')}>Gửi</button>
        </div>
      </form>


    </div>
  )
}

export default CommentMovie