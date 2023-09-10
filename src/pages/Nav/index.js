import './nav.css';
import './navQuery.css';
import React from 'react';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavMenu() {

    return (
        <div className="navigation">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> 
                    <img src={require('../../Imgs/logo_12.jpg')}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Quem somos</Nav.Link>
                            <Nav.Link href="#pricing">O que fazemos</Nav.Link>
                            <Nav.Link href="#pricing">Projetos</Nav.Link>
                            <Nav.Link href="#pricing">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
export default NavMenu;