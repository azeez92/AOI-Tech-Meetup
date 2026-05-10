import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/trech-elevation.png' 




function Header() {
  return (
    <Navbar expand="lg" className="bg-black ">
      <Container>
        <Navbar.Brand href="#home">

         <img src={logo} alt="" height="60px" />


        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white' href="#link">About</Nav.Link>
            <Nav.Link className='text-white' href="#link">Speakers</Nav.Link>
            <Nav.Link className='text-white' href="#link">Gallery</Nav.Link>
            <Nav.Link className='text-white' href="#link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;