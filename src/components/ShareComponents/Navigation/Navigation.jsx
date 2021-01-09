import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Asset/image/New/carts/partner-2.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <Navbar style={{background: 'white'}} expand="lg" className="sticky-top">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <img className="logo-size" src={logo} alt="Car Details" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto d-flex ">
                        <Link className="nav-link  text-dark mr-2" to="/home">Home</Link>
                        <Link className="nav-link  text-dark mr-2" to="/addCar">Add Car</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>        
        </>
    );
};

export default Navigation;