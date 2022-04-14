import styles from './styles.module.css'
import homeSVG from './../../public/homeIcon.svg'
import { Link } from 'wouter'
export default function Header() {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <div className={styles.homeConteiner}>
          <img src={homeSVG} alt='Home-Icon' className={styles.homeIcon} />
          <h1>Giffy</h1>
        </div>
      </Link>
    </header>
  )
}
