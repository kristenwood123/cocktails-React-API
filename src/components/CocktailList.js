import React from 'react'
import Loading from './Loading'
import CockTail from './Cocktail'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()

  if(loading) {
    return <Loading />
  }
  if(cocktails.length < 1) {
   return <h2 className='section-title'>No cocktails matched your search criteria</h2>
  }
  return (
    <div>
      <h1>cocktail list</h1>
    </div>
  )
}

export default CocktailList
