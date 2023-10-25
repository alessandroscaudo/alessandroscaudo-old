import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '@components/Header'
import DownloadCV from '@components/DownloadCV'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Alessandro Scaudo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="AS - Home" />
        <p className="description">
          <DownloadCV />
        </p>
      </main>

      <Footer />
    </div>
  )
}
