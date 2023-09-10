import './nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavMenu() {

    return (
        <div className="navigation">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/"><img src={require('../../Imgs/logo_12.jpg')} /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/QuemSomos">Quem somos</Link>
                            <Link to="/OqueFazemos">O que fazemos</Link>
                            <Link to="/Projetos">Projetos</Link>
                            <Link to="/Contato">Contato</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
export default NavMenu;