import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext'
import { GenreList } from '../../components/GenreList'

function Details() {

  const context = useContext(MenuContext)

  return (
    <>
      <GenreList {...context} />
    </>
  )
}

export default Details