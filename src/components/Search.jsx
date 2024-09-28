import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Searchcard from './Searchcard'
import { useParams } from 'react-router-dom'
import { FetchDataFromApi } from './Api'

function Search() {
  const [search, setSearch] = useState()
  const [loading, setloaading] = useState(false)
  const { searchQuery } = useParams()

  useEffect(() => {
    Searchfethapi()
  }, [searchQuery])
  const Searchfethapi = () => {
    FetchDataFromApi(`search/?q=${searchQuery}`).then(({ contents }) => {
      console.log(contents)
      setSearch(contents)
    })
  }
  return (
    <div className='flex '>
      <div className='hidden md:block xl:block lg:block'>
        <Sidebar />
      </div>
      <div className=' mt-3'>
        <div className='md:h-[calc(100vh-4.44rem)] overflow-y-auto overflow-x-hidden'>
          {
            search?.map((item) => {
              if (item.type !== "video") return null;
              return <Searchcard key={item.id} video={item.video} />;
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Search