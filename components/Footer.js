import styles from './Footer.module.css';
import { Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href='http://alessandroscaudo.com' className={styles.logo}>Alessandro Scaudo</a>

      </footer>
      <Row className={styles.footerLink}>
        <Col className='text-center'>
          <a href='/'>Home</a>
        </Col>
        <Col className='text-center'>
          <a href='/privacyPolicy'>Privacy Policy</a>
        </Col>
      </Row>
    </>
  )
}
