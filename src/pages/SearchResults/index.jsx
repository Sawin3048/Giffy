/* eslint-disable react/no-unescaped-entities */
import ListOfGifs from '../../components/ListOfGifs'
import styles from './styles.module.css'
import Spinner from '../../components/Spinner'
import useGifs from '../../hooks/useGifs'

export default function SearchResults({ params }) {
  const keyword = params.keyword
  const { loading, gifs } = useGifs({ keyword })
  console.log('SearchResults')
  if (loading) return <Spinner />
  return (
    <>
      <h2>
        Estos resultados coincidieron con{': '}
        <span className={styles.keyword}>"{keyword}"</span>
      </h2>
      <ListOfGifs gifs={gifs} />
    </>
  )
}
