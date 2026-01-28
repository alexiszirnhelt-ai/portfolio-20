import { NavLink } from "react-router-dom";

function Footer () {
    return (
        <>
            <footer className="site-footer bg-dark text-white">
                {/*3 Colonnes*/}
                <div className="container py-5">
                    <div className="row">
                        {/*Col 1*/}
                        <div className="col-12 col-lg-4">
                            <h4>John Doe</h4>
                            <address>
                                <p className="mb-1">40 rue Laure Diebold</p>
                                <p className="mb-1">69009 Lyon, France</p>
                                <p className="mb-1"><a href="tel:1020304050" className="text-decoration-none text-light">10 20 30 40 50</a></p>
                                <p className="mb-1"><a href="mailto:john.doe@gmail.com" className="text-decoration-none text-light">john.doe@gmail.com</a></p>
                            </address>
                            <div className="footer-social d-flex gap-3">
                                <a href="https://github.com" target="_blank" className="footer-social_link"><i className="bi bi-github fs-3"></i></a>
                                <a href="http://twitter.com" target="_blank" className="footer-social_link"><i className="bi bi-twitter-x fs-3"></i></a>
                                <a href="http://linkedin.com" target="_blank" className="footer-social_link fs-3"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        {/*Col 2*/}
                        <div className="col-12 col-lg-4">
                            <h4>Liens utiles</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink className="list-nav" to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="list-nav" to="/services">Services</NavLink>
                                </li>
                                <li>
                                    <NavLink className="list-nav" to="/portfolio">Portfolio</NavLink>
                                </li>
                                <li>
                                    <NavLink className="list-nav" to="/contact">Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink className="list-nav" to="/mentions-legales">Mentions légales</NavLink>
                                </li>
                            </ul>
                        </div>
                        {/*Col 3*/}
                        <div className="col-12 col-lg-4">
                            <h4>Mes dernières réalisation</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink className="list-nav" to="/portfolio">Fresh Food</NavLink>
                                </li>
                                <li>
                                    <NavLink className="list-nav" to="/portfolio">Restaurant Akira</NavLink>
                                </li>
                                <li>
                                    <NavLink className="list-nav" to="/portfolio">Espace bien-être</NavLink>
                                </li>
                                <li>
                                    <NavLink className="list-nav" to="/portfolio">SEO</NavLink>
                                </li>
                                <li>
                                    <NavLink className="list-nav" to="/portfolio">Création d'une API</NavLink>
                                </li>
                                <li>
                                    <NavLink className="list-nav" to="/portfolio">Création d'un site</NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* ----- */}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;