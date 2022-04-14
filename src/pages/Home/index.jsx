import { useState } from 'react'
import { useLocation } from 'wouter'
import styles from './styles.module.css'
import searchIcon from './../../public/searchIcon.svg'
import useGifs from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()
  const { gifs } = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    if (keyword.replaceAll(' ', '') !== '') pushLocation(`./search/${keyword}`)
    // else: hacer animacion
  }

  const handleChange = evt => {
    setKeyword(evt.target.value.toLowerCase())
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={handleChange}
          placeholder='Search a gif here...'
          type='text'
          className={styles.textInput}
        />
        <button className={styles.submitButton}>
          <div className={styles.searchIcon}>
            <img src={searchIcon} alt='' />
          </div>
        </button>
      </form>
      <h3>Tu última busqueda aparecera aquí</h3>
      <ListOfGifs gifs={gifs} />
    </>
  )
}
