import React from 'react'
import { Rate, ConfigProvider } from 'antd';
import VoteService from '../../../../services/vote.service';
import useUserInfo from '../../../../hooks/useUserInfo'
import { useNavigate } from 'react-router-dom';
function Voting({ idMovie }) {
  const infoUser = useUserInfo()
  const nav = useNavigate()
  const handleVote = (values) => {
    if (infoUser) {
      VoteService.create({
        rate: values,
        movie: idMovie,
        user: infoUser.id
      })
        .then(res => console.log(res))
        .catch(error => {
          console.log(error)
        })
    } else {
      nav('/login')
    }
  }

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorFillContent: 'gray',
          },
        }}
      >
        <p>Đánh giá phim</p> <Rate defaultValue={4} tooltips={['Dở tệ', 'Tệ', 'Bình Thường', 'Cũng được', 'Hay']} onChange={handleVote} />
      </ConfigProvider>

    </div>
  )
}

export default Voting