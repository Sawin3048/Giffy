import style from './styles.module.css'
import SearchResults from '../pages/SearchResults'
import Home from '../pages/Home'
import { Route } from 'wouter'
import Detail from '../pages/Detail'
import Header from './../components/Header'
import { GifsContextProvider } from '../context/GifContext'

export default function App() {
  return (
    <section className={style.app}>
      <Header></Header>
      <GifsContextProvider>
        <Route component={Home} path='/' />
        <Route component={SearchResults} path='/search/:keyword' />
        <Route component={Detail} path='/gif/:id' />
      </GifsContextProvider>
    </section>
  )
}
