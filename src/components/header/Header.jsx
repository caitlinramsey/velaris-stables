import Navbar from 'react-bootstrap/Navbar';
import navLogo from '../../../images/velaris.png'
import './header.css'

function Header() {
    return (
        <Navbar.Brand href='/' className='brand ps-3'>
            <img src={navLogo} width='180px' alt="image of my logo" />
            <h1 className="main-title">Velaris Stables</h1>
        </Navbar.Brand>
    )
}

export default Header;