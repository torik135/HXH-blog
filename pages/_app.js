import '../styles/globals.css'

// components
import Header from '../components/Header'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header/>
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
