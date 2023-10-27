import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faInstagram, faLinkedinIn, faStrava } from "@fortawesome/free-brands-svg-icons";

export default function AppShare() {
    return (
        <div className='containerLow'>
            <Row>
                <Col className="justify-content-center">
                    <a href="http://instagram.com/alessandroscaudo" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="l" style={{color: "#6AA202"}} /> 
                    </a>
                     
                </Col>
                <Col className="">
                    <a href="http://linkedin.com/alessandroscaudo" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} size="l" style={{color: "#6AA202"}} />
                    </a>
                </Col>
                <Col className="">
                    <a href="http://messenger.com/alessandroscaudo" target="_blank">
                        <FontAwesomeIcon icon={faFacebookMessenger} size="s" style={{color: "#6AA202"}} />
                    </a>
                </Col>
                <Col className="">
                    <a href="http://strava.com/alessandroscaudo" target="_blank">
                        <FontAwesomeIcon icon={faStrava} size="s" style={{color: "#6AA202"}} />
                    </a>
                </Col>    
            </Row>
        </div>
    )       
}
