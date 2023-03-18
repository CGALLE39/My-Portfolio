import  './index.scss'
import {Link, NavLink} from "react-router-dom";
import Logosub from "../../assets/images/C (2).png"
import LogoC from "../../assets/images/c-logo.png"
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const  Sidebar = () => (
<div className='nav-bar'>
    <Link className='logo' to ='/'>
        <img src={LogoC} alt="logo" />
        <img className="sub-logo" src={Logosub} alt="cynthia" />
    </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
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
    </ul>
</div>
)
export default Sidebar;