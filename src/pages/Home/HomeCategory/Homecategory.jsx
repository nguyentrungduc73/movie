import React, { useEffect, useState } from 'react'
import MovieService from '../../../services/movie.service'
import MenuMovie from '../../../Component/MenuMoive/MenuMovie'

function HomeCategory({ category, title }) {
  const [dataRender, setDataRender] = useState([])
  useEffect(() => {
    if (category !== undefined) {
      MovieService.searchByCategory(`category.categoryName?='${category}'`, 'category').then(res => {
        console.log(res)
        setDataRender(res.data.items.splice(0, 6))
      })
    } else {
      MovieService.GetAllMovie().then(res => {
        console.log(res)
        setDataRender(res.data.items.splice(0, 6))
      }).catch(err => {
        console.log(err)
      })
    }
  }, [])
  return (
    <div>
      <MenuMovie title={title} data={dataRender} />
    </div>
  )
}

export default HomeCategory