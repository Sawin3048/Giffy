import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifContext'

export default function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)
  // Retrieve the keywork from localStorage
  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword: keywordToUse }).then(arrayGifs => {
      setLoading(false)
      setGifs(arrayGifs)
      // Save the keyword in localStorage
      if (keyword) localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, setGifs])

  return { loading, gifs }
}
