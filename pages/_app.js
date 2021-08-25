import '../styles/loading.scss'
import '../styles/globals.scss'
import '../styles/index.scss'
import '../styles/formulaire.scss'
import '../styles/recruteur.scss'
import '../styles/header.scss'
import '../styles/fileExplorer.scss'
import '../styles/members.scss'
import '../styles/consultant/consultant.scss'
import '../styles/consultant/consultant_gestionrecrutements.scss'
import '../styles/consultant/consultant_statistiques.scss'
import '../styles/consultant/consultant_placeaffaire.scss'
import '../styles/consultant/formation.scss'
import Loading from '../components/loader/loader'


function MyApp({ Component, pageProps }) {
  return <Loading><Component {...pageProps} /></Loading>
}

export default MyApp
