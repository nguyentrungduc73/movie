import React, { useEffect, useState } from 'react'
import styles from './Category.module.scss'
import classNames from 'classnames/bind'
import { Select } from 'antd';
import MenuMovie from '../../Component/MenuMoive/MenuMovie';
import MovieService from '../../services/movie.service';
import { useParams, useSearchParams } from 'react-router-dom';


const cx = classNames.bind(styles)

function Category() {
  const { categoryName } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [category, setCategory] = useState('')

  const [dataRender, setDataRender] = useState([])


  useEffect(() => {
    MovieService.searchByCategory(`category.categoryName?='${searchParams.get('category') || categoryName}'`, 'category')
      .then((res) => {
        console.log(res.data.items)
        setDataRender(res.data.items)
      })
  }, [searchParams, categoryName])
  const onChange = (value) => {
    console.log(`selected ${value}`);
    setSearchParams({
      category: value
    })
    setCategory(value)
  };
  const onSearch = (value) => {
    console.log(value)
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('select-box')}>
          <Select
            popupClassName={cx('option')}
            size='large'
            className={cx('select')}
            showSearch
            placeholder="Vui lòng chọn thể loại phim"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 'Comedy',
                label: 'Phim Hài',
              },
              {
                value: 'Romantic',
                label: 'Phim Tình cảm',
              },
              {
                value: 'Action',
                label: 'Phim Hành Động',
              },
              {
                value: 'Anime',
                label: 'Phim Anime',
              },
            ]}
          />
        </div>
        <MenuMovie data={dataRender} title={` ${category} Movie`} />
      </div>

    </div>
  )
}

export default Category