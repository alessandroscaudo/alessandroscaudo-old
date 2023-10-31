import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faTelegram} from "@fortawesome/free-brands-svg-icons";

export default function aboutMe() {
  return (
    <div className="container">
      <Head>
        <title>Alessandro Scaudo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Alessandro Scaudo" />
      <main>
      <Row className='px-2'>
          <div className='containerLow'>
            <h1>Conttattami</h1>
            <p>
              Se desideri inviarmi un'email, ti invitiamo a farlo all'indirizzo <a href='mailto:scaudo.alessandro@gmail.com' aria-label='Link per inviare una mail a Alessandro'>scaudo.alessandro@gmail.com</a> risponderò al più presto possibile.
            </p>
            <p>
              Oppure, inviami un messaggio diretto sui seguenti account social:
            </p>
          </div>
          <div className='containerHigh'>
            <Row>
              <Col style={{textAlign:"center", margin:"auto"}}>
                  <a href="http://t.me/StyleAle" target="_blank"aria-label="Link al profilo Telegram di Alessandro"> 
                      <FontAwesomeIcon icon={faTelegram} className="social-icon" />
                  </a>
              </Col>
              <Col style={{textAlign:"center", margin:"auto"}}>
                  <a href="http://m.me/scaudo.alessandro" target="_blank" aria-label="Link al profilo Messenger di Alessandro">
                      <FontAwesomeIcon icon={faFacebookMessenger} className="social-icon" />
                  </a>
              </Col>    
            </Row>
          </div>
      </Row>

      </main>
      <Footer />
      
    </div>
  )
}
