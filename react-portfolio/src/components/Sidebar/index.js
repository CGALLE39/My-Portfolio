import  './index.scss'
import {Link, NavLink} from "react-router-dom";
import Logosub from "../../assets/images/C (2).png"
import LogoC from "../../assets/images/c-logo.png"
import {faBars, faCode, faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";

const  Sidebar = () => {
const [showNav, setShowNav] = useState(false);

return (
<div className='nav-bar'>
    <Link className='logo' to ='/'
          onClick={() => setShowNav(false)}>
        <img src={LogoC} alt="logo" />
        <img className="sub-logo" src={Logosub} alt="cynthia" />
    </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/"
                     onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about"
                     onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="work-link" to="/work"
                     onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact"
                     onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>

    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/cynthialgallegos/'>
                <FontAwesomeIcon icon={faLinkedin}  color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/CGALLE39'>
                <FontAwesomeIcon icon={faGithub}  color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/CGALLE39'>
                <FontAwesomeIcon icon={faTwitter}  color="#4d4d4e" />
            </a>
        </li>
    </ul>
    <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className='hamburger-icon' />
    </div>
    )
}
export default Sidebar;