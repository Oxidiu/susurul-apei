import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarElement() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 992);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SUSURUL APEI</Navbar.Brand>
        <div className={isWideScreen ? 'hidden' : 'butonRezervare'}>
              <Button variant="success">REZERVARE</Button>{' '}
            </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">ACASĂ</Nav.Link>
            <Nav.Link href="#link">DESPRE NOI</Nav.Link>
            <Nav.Link href="#link">CAMERE</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <div className={isWideScreen ? 'butonRezervare' : 'hidden'}>
              <Button variant="success">REZERVARE</Button>{' '}
            </div>
      </Container>
    </Navbar>
  );
}

export default NavbarElement;
