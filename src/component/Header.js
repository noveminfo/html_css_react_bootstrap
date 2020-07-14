import React from 'react';
import { Navbar, Nav, Container, Jumbotron } from 'react-bootstrap';

function Hearder() {
    return (
        <div>
            <Jumbotron fluid className="mb-0">
                <Container>
                    <h1>First React App, layout by bootstrap</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                <Navbar.Brand href="#home">ReactApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Hearder;