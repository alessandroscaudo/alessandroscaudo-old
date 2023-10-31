import Head from 'next/head'
import Header from '@components/Header'
import AppShare from '@components/AppShare'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        
        <title>ALESSANDRO SCAUDO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Alessandro Scaudo" />
      <main>
        <div className='contenuto'>
          <h1>MAXXI di Roma</h1>
          <img src='VistaDelMaxxi.webp' className='immagine' alt='Vista del MAXXI di Roma'/>
          <p>Roma - MAXXI | Museo nazionale delle arti del XXI secolo</p>
        </div>
        <AppShare />        
      </main>
      <Footer />
      
    </div>
  )
}
