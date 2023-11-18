import "./navigation.css";
import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  const current = useLocation();

  const currentPage = current.pathname === '/' ? 'Home' : current.pathname.slice(1);
  console.log(currentPage);

  console.log(currentPage === "Home");

  return (
    <Navbar expand='lg' className="navigation p-2">
      <Container className='nav-tabs fw-bold'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link
                to="/"
                onClick={() => handlePageChange("Home")}
                className={currentPage === "Home" ? "active" : "nav-link"}
              >
                Home
              </Link>
              <Link
                to="/About"
                onClick={() => handlePageChange("About")}
                className={currentPage === "About" ? "active" : "nav-link"}
              >
                About
              </Link>
              <Link
                to="/Boarding"
                onClick={() => handlePageChange("Boarding")}
                className={currentPage === "Boarding" ? "active" : "nav-link"}
              >
                Boarding
              </Link>
              <Link
                to="/Lessons"
                onClick={() => handlePageChange("Lessons")}
                className={currentPage === "Lessons" ? "active" : "nav-link"}
              >
                Lessons
              </Link>
              <Link
                to="/Contact"
                onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "active" : "nav-link"}
              >
                Contact
              </Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation;