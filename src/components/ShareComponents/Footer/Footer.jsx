import { faBehance, faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Asset/image/New/carts/partner-2.png';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-body">
            <div className="container-fluid mt-5">
                <div className="text-center">
                    <Link to="/home"><img className="footer-logo-size img-fluid" src={logo} alt=""/></Link>
                </div>
                
                <div className="mt-5 mb-5 d-flex justify-content-around">
                    <Link to="/#"><FontAwesomeIcon className="icon-item" icon={faFacebook}/></Link>
                    <Link to="/#"><FontAwesomeIcon className="icon-item" icon={faTwitter}/></Link>
                    <Link to="/#"><FontAwesomeIcon className="icon-item" icon={faLinkedinIn}/></Link>
                    <Link to="/#"><FontAwesomeIcon className="icon-item" icon={faBasketballBall}/></Link>
                    <Link to="/#"><FontAwesomeIcon className="icon-item" icon={faBehance}/></Link>
                </div>

            </div>
            <div className="footer-copyright text-center mt-2 mb-4">
                <p>&copy; All right reserved {(new Date().getFullYear())}</p>
            </div>
        </section>
    );
};

export default Footer;

