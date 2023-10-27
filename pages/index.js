import Head from 'next/head'
import Header from '@components/Header'
import AppShare from '@components/AppShare'
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
        <AppShare />
        <DownloadCV />
        
      </main>
      <Footer />
    </div>
  )
}
