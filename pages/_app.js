import '../styles/globals.scss'
import MainNav from '../components/MainNav'

function MyApp({ Component, pageProps }) {
  return (
  <content>
    <MainNav/>
      <Component {...pageProps} />
  </content>
  )
}

export default MyApp
