import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext'
import { GenreList } from '../../components/GenreList'

import { useParams } from 'react-router-dom'



function Homepage() {
  let { id } = useParams()

  const context = useContext(MenuContext)


  return (
    <>
      <GenreList {...context} />
      <h1>{id}</h1>
    </>
  )
}

export default Homepage