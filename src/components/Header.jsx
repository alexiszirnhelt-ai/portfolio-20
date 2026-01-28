import { NavLink } from "react-router-dom";

function Header () {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <NavLink className="navabr-brand">John Doe</NavLink>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-nowrap" to="/mentions-legales">Mentions Légales</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;