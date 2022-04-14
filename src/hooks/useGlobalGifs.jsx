import { useContext } from 'react'
import GifsContex from '../context/GifContext'

export default function useGlobalGifs() {
  const { gifs } = useContext(GifsContex)
  return gifs
}
