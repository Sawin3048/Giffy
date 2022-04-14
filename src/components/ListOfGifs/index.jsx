import styles from './styles.module.css'
import Gif from '../Gif'
import getPinSize from '../../services/getPinSize'

export default function ListOfGifs({ gifs } = {}) {
  return (
    <div className={styles.pinConteiner}>
      {gifs.map(({ url, title, width, height, id }) => {
        const size = getPinSize({ width, height })
        return <Gif size={size} url={url} title={title} key={url} id={id} />
      })}
    </div>
  )
}
