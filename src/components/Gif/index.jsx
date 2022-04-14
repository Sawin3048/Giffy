import styles from './styles.module.css'
import { Link } from 'wouter'

export default function Gif({ size, url, title, id, withAuto }) {
  const sizeClass = `height${size}`
  return (
    <Link to={`/gif/${id}`}>
      <div className={`${styles.pin} ${styles[sizeClass]}`}>
        <img
          src={url}
          alt={title}
          title={title}
          className={styles.img}
          loading='lazy'
        />
        <div className={styles.hover}>
          <div></div>
        </div>
      </div>
    </Link>
  )
}
