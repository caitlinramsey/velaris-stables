import "./nav.css";
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import navLogo from '../../../images/velaris.png'

function Navigation() {
  const current = useLocation();

  const currentPage = current.pathname === '/' ? 'Home' : current.pathname.slice(1);
  console.log(currentPage);

  console.log(currentPage === "Home");

  return (
    <Navbar expand='lg' className="navigation p-2">
      {/* <Navbar.Brand href='/' className='brand ps-3'>
          <img src={navLogo} width='180px' alt="image of my logo" />
          <h1 className="main-title">Velaris Stables</h1>
      </Navbar.Brand> */}
      <Container className='nav-tabs fw-bold'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link
                href="/"
                onClick={() => handlePageChange("Home")}
                className={currentPage === "Home" ? "active" : "nav-link"}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/About"
                onClick={() => handlePageChange("About")}
                className={currentPage === "About" ? "active" : "nav-link"}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="/Boarding"
                onClick={() => handlePageChange("Boarding")}
                className={currentPage === "Boarding" ? "active" : "nav-link"}
              >
                Boarding
              </Nav.Link>
              <Nav.Link
                href="/Lessons"
                onClick={() => handlePageChange("Lessons")}
                className={currentPage === "Lessons" ? "active" : "nav-link"}
              >
                Lessons
              </Nav.Link>
              <Nav.Link
                href="/Contact"
                onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "active" : "nav-link"}
              >
                Contact
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation;