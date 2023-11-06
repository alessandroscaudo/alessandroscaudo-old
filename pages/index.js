import Head from 'next/head'
import Header from '@components/Header'
import { Row, Col } from "react-bootstrap";
import AppShare from '@components/AppShare'
import DownloadCV from '@components/DownloadCV'
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
          <Row>
            <h1>MAXXI di Roma</h1>
            <Col xs={12} sm={6}>
              <img src='VistaDelMaxxi.webp' className='immagine' alt='Vista del MAXXI di Roma'/>
            </Col>
            <Col xs={12} sm={6}>
              <p>Roma - MAXXI | Museo nazionale delle arti del XXI secolo</p>
            </Col>
          </Row>
        </div>
        <Row>
          <div className='contenuto'>
            <div>
              <h3>Bar_Is_The_Name</h3>
              <p>anteprima</p>
            </div>
            <div className='col align-self-end'>
              <a class="btn btn-flat mx-2" href="blog/2023/11/BarIsTheName" role="button">Continua..</a>
            </div>
          </div>
        </Row>
        <AppShare />
        <DownloadCV />        
      </main>
      <Footer />
      
    </div>
  )
}
