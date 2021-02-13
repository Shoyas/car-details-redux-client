import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../Asset/image/New/carts/partner-2.png';
import './Navigation.css';

const Navigation = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://afternoon-thicket-75984.herokuapp.com/getAdmin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setIsAdmin(data);
            console.log(data);
        })
    }, [])

    return (
        <>
            <Navbar style={{background: 'white'}} expand="lg" className="sticky-top">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <img className="logo-size" src={logo} alt="Car Details" />
                    </Link>
                    <p className="mt-3">Name: {loggedInUser.name}</p>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto d-flex ">
                            
                            <Link className="nav-link text-dark mr-2" to="/home">Home</Link>
                            <Link className="nav-link text-dark mr-2" to="/login">Login</Link>

                            {
                                isAdmin && 
                                <Nav>
                                    <Link className="nav-link text-dark mr-2" to="/addCar">Add Car</Link>
                                    <Link className="nav-link text-dark mr-2" to="/makeAdmin">Make Admin</Link>
                                </Nav>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>        
        </>
    );
};

export default Navigation;