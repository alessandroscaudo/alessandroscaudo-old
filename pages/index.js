import Head from 'next/head'
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
      <Header title="Alessandro Scaudo" />
      <main>
        <div className='containerLow'>
          <p className="description">
            Hello
          </p>
        </div>
        <DownloadCV />
        
      </main>
      <Footer />
    </div>
  )
}
