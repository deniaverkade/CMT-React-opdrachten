import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return ( 
        <>
        <div className="navbar-container">
          <nav>
            <ul>
                <li className="home"><Link to="/">Home</Link></li>
                <li className="contact"><Link to="/Contact">Contact</Link></li>
                <li className="aboutus"><Link to="/About">About us</Link></li>
            </ul>
          </nav>
        </div>
        </>
     );
}
 
export default Header;