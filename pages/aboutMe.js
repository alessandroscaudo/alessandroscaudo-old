import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Row, Col } from "react-bootstrap";
import DownloadCV from '@components/DownloadCV';

export default function aboutMe() {
  return (
    <div className="container">
      <Head>
        <title>Alessandro Scaudo</title>
        <link rel="icon" href="/favicon.ico" />
        <html lang="it" amp />
      </Head>
      <Header title="Alessandro Scaudo" />
      <main>
      <Row>
        <Col xs={12} sm={6} >
          <div className='containerLow'>
            <h1>About me</h1>
            <p>Ciao, <br />
              Mi chiamo Alessandro, ho la passione per la fotografia, i viaggi e l'avventura. Questo Blog vuole essere un contenitore dove raccontare tutte le mie passioni.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} >
          <div className='containerLow'>
            <img className='immagine' src='aboutMe/aboutMe.webp' alt='Foto di Alessandro a Roma' />
          </div>
        </Col>
      </Row>
      <DownloadCV />

      </main>
      <Footer />
      
    </div>
  )
}
