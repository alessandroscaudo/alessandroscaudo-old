import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Row, Col, Container } from 'react-bootstrap';

const BlogPost = () => {
  const author = 'Alessandro Scaudo';
  const pubblicationDate = '6 novembre 2023';
  const lastModified = '6 novembre 2023';
  const readingTime = '5 minuti';

  return (
    <div className="container">
      <Head>
        <title>ALESSANDRO SCAUDO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Alessandro Scaudo" />
      <main>
        <Container className='containerLow'>
          <Row>
            <Col>
              <div className='blog-header'>
                <h1>Bar_Is_The_Name</h1>
                <img src='/blog/2023/11/Bar_Is_The_Name/0d5b1841-7881-4af2-924e-77627631b085.webp' style={{maxWidth:"768px"}} id='copertina' className='immagine' alt='Copertina del post su Bar_Is_The_Name'></img>
                <p>di {author}</p>
                <div style={{lineHeight:'1rem'}}>
                  <p style={{marginBottom:'0.5rem'}}><strong>Data di pubblicazione: </strong>{pubblicationDate}</p>
                  <p style={{marginBottom:'0.5rem'}}><strong>Ultima modifica: </strong>{lastModified}</p>
                  <p style={{marginBottom:'0.5rem'}}><strong>Tempo di lettura stimato: </strong>{readingTime}</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className='blog-navigation'>
                <h3>Contenuti dell'articolo</h3>
                <ul>
                  <li><a href='#introduzione'>Introduzione</a></li>
                  <li><a href='#sezione1'>Prima versione</a></li>
                    <ul>
                      <li><a href='#sezione1.1'>Ambiente di sviluppo</a></li>
                    </ul>
                  <li><a href='#sezione2'>Seconda versione</a></li>
                </ul>
              </div>
            </Col>
            <Col md={9}>
              <div className='blog-content'>
                <section id="introduzione">
                <h2>Introduzione</h2>
                <p><a href='http://baristhename.com/' target="_blank" aria-label="Link al sito Bar_Is_The_Name">Bar_Is_The_Name</a> è il sito web dell'onomima attività commerciale situata a Busto Arsizio. Lo sviluppo del sito a seguito due pipe di lavoro differenti che saranno in seguito analizzate:</p>
                </section>
                <section id="sezione1">
                  <h2>Prima Versione</h2>
                  <p>Contenuto della sezione 2...</p>
                  <section id='sezione1.1'>
                    <h3>Ambiente di sviluppo</h3>
                    <p></p>
                  </section>
                </section>
                <section id="sezione2">
                  <h2>Seconda versione</h2>
                  <p>Contenuto della sezione 3...</p>
                </section>
              </div>
            </Col>
          </Row>
        </Container>    
      </main>
      <Footer />
      
    </div>
  )
};

export default BlogPost;
