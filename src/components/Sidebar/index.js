import './index.scss'
import J from '../../assets/images/j.png'
import LogoSubtitle from '../../assets/images/jessica.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={J} alt="J" />
        <img className="sub-logo" src={LogoSubtitle} alt="Jessica" />
      </Link>
      <nav>
     
          <NavLink activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
    
      
          <NavLink activeclassname="active" className="about-link"  to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
       
          <NavLink activeclassname="active" className="projects-link" to="/projects">
              <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
          </NavLink>
 
          <NavLink activeclassname="active" className="contact-link" to="/contact">
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
    
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/jessica-fermin-3b5681221/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icons" icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/lotusblossom42"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icons" icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCEN06Jt_OYSJ2YJgUG1ki0A"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icons" icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a 
            href="https://twitter.com/lotusblossomsan" 
            rel="noreferrer" 
            target="_blank"
          >
            <FontAwesomeIcon className="icons" icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar