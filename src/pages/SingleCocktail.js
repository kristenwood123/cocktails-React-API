import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)


  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if(data.drinks) {

        } else {
          setCocktail(null)
        }
        setLoading(false)
      }
      catch(e) {
        console.log(e);
        setLoading(false)
      }
    }
    getCocktail()
  },[id])
  return (
    <section>
      <h1>{id}</h1>
    </section>
  )
}

export default SingleCocktail


//www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007