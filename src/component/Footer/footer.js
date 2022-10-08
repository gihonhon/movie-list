import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import './footer.css'
import { Container } from "react-bootstrap";

function Footer () {
    return (
        <Container>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer__head">
            <div class="col-md-4 d-flex align-items-center">
                <Link to='/' className="footerLink">
                    <FontAwesomeIcon icon={faBowlFood}/>
                </Link>
                <span className="mb-3 mb-md-0 text-muted">&copy; Created by Honhon</span>
            </div>
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><FontAwesomeIcon className="footerIcon" icon={faFacebook}/></li>
                <li className="ms-3"><FontAwesomeIcon className="footerIcon" icon={faInstagram}/></li>
                <li className="ms-3"><FontAwesomeIcon className="footerIcon" icon={faTwitter}/></li>
                {/* <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li> */}
            </ul>
            </footer>
        </Container>
    )
}

export default Footer