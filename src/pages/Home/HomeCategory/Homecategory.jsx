import React, { useEffect, useState } from 'react'
import MovieService from '../../../services/movie.service'
import MenuMovie from '../../../Component/MenuMoive/MenuMovie'

function HomeCategory({ category, title }) {
  const [dataRender, setDataRender] = useState([])

  const getData = async (category) => {
    try {
      if (category !== undefined) {
        const resp = await MovieService.searchByCategory(
          `category.categoryName?='${category}'`,
          "category"
        );
        setDataRender(resp.data.items.splice(0, 6));
      } else {
        const respa = await MovieService.GetAllMovie();
        setDataRender(respa.data.items.splice(0, 6));
      }

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData(category)
  }, [])
  return (
    <div>
      <MenuMovie title={title} data={dataRender} />
    </div>
  )
}

export default HomeCategory