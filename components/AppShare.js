import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faInstagram, faLinkedinIn, faStrava } from "@fortawesome/free-brands-svg-icons";

export default function AppShare() {
    return (
        <div className='containerLow'>
            <Row>
                <Col style={{textAlign:"center", margin:"auto"}}>
                    <a href="http://instagram.com/alessandroscaudo" target="_blank">
                        <FontAwesomeIcon icon={faInstagram}  style={{color: "#6AA202", maxHeight: "50px"}}/> 
                    </a>
                     
                </Col>
                <Col style={{textAlign:"center", margin:"auto"}}>
                    <a href="http://linkedin.com/alessandroscaudo" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#6AA202", maxHeight: "50px"}} />
                    </a>
                </Col>
                <Col style={{textAlign:"center", margin:"auto"}}>
                    <a href="http://messenger.com/alessandroscaudo" target="_blank">
                        <FontAwesomeIcon icon={faFacebookMessenger} style={{color: "#6AA202", maxHeight: "50px"}} />
                    </a>
                </Col>
                <Col style={{textAlign:"center", margin:"auto"}}>
                    <a href="http://strava.com/alessandroscaudo" target="_blank">
                        <FontAwesomeIcon icon={faStrava} style={{color: "#6AA202", maxHeight: "50px"}} />
                    </a>
                </Col>    
            </Row>
        </div>
    )       
}
