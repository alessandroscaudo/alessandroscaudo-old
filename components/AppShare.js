import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faInstagram, faLinkedinIn, faStrava } from "@fortawesome/free-brands-svg-icons";

export default function AppShare() {
    return (
        <div className='containerLow'>
            <Row>
                <Col style={{textAlign:"center", margin:"auto"}}>
                    <a href="http://instagram.com/alessandroscaudo" target="_blank" aria-label="Link al profilo Instagram di Alessandro">
                        <FontAwesomeIcon icon={faInstagram}  className="social-icon"/> 
                    </a>
                     
                </Col>
                <Col style={{textAlign:"center", margin:"auto"}}>
                    <a href="http://linkedin.com/in/alessandroscaudo" target="_blank"aria-label="Link al profilo Linkedin di Alessandro"> 
                        <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
                    </a>
                </Col>
                <Col style={{textAlign:"center", margin:"auto"}}>
                    <a href="http://m.me/scaudo.alessandro" target="_blank" aria-label="Link al profilo Messenger di Alessandro">
                        <FontAwesomeIcon icon={faFacebookMessenger} className="social-icon" />
                    </a>
                </Col>
                <Col style={{textAlign:"center", margin:"auto"}}>
                    <a href="http://strava.com/athletes/22604206" target="_blank" aria-label="Link al profilo Strava di Alessandro">
                        <FontAwesomeIcon icon={faStrava} className="social-icon" />
                    </a>
                </Col>    
            </Row>
        </div>
    )       
}
