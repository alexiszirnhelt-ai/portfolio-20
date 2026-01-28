import { NavLink } from "react-router-dom";

function Header () {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-2">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="#">JOHN DOE</NavLink>
                    

                        {/*Bouton Hambuger*/}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                        {/*Navigation*/}
                        <div className="collapse navbar-collapse" id="mainNavbar">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/services">SERVICES</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/portfolio">PORTFOLIO</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-nowrap" to="/mentions-legales">MENTIONS LÉGALES</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;