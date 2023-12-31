import{Link} from 'react-router-dom'

import './Header.css'
import logo from '../../assets/images/logo.png'

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                    <Link className="navbar-brand logo-img" to="/"> <img src={logo} alt="logo"/> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Resume">Resume</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Projects">Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
     
    </>
  )
}
