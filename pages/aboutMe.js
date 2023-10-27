import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Row, Col } from "react-bootstrap";

export default function aboutMe() {
  return (
    <div className="container">
      <Head>
        <title>Alessandro Scaudo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Alessandro Scaudo" />
      <main>
        <Row xs={1} >
          <Col className='containerLow'>
            <h1>About me</h1>
            <p>Ciao, <br />
            Sono Alessandro, un quasi trentenne... con una passione per la fotografia, i viaggi e l'avventura...
            </p>
          </Col>
          <Col className='containerLow' >
            <img className='immagine' src='aboutMe/aboutMe.webp' alt='Foto di Alessandro a Roma' />
          </Col>
        </Row>

      </main>
      <Footer />
      
    </div>
  )
}
