import banner from "..//assets/images/banner.jpg"
import freshfood from "../assets/images/portfolio/fresh-food.jpg"
import Akira from "../assets/images/portfolio/restaurant-japonais.jpg"
import BienEtre from "../assets/images/portfolio/espace-bien-etre.jpg"
import SEOimg from "../assets/images/portfolio/seo.jpg"
import APIimg from "../assets/images/portfolio/coder.jpg"
import maquette from "../assets/images/portfolio/screens.jpg"

function Portfolio () {
    return (
        <>
            <img src={banner} alt="banner-portfolio"/>
            <section className="container text-center p-5">
                <h1 className="fw-bold">Portfolio</h1>
                <p>Voici quelques-unes de mes réalisations</p>
                <div className="mx-auto mt-4 w-75 w-md-80 w-lg-50" style={{
                    height:"5px",
                    width:"500px",
                    backgroundColor:"#0d6efd",
                }}></div>
            </section>
            
            {/*Cards Container*/}
            <div className="container py-5">
            {/*card ligne 1*/}            
                <div className="row g-4 justify-content-center mb-4">
                    {/*card 1*/}
                    <div className="col-12 col-md6 col-lg-4">
                        <div className="card text-center h-100 hover-effect">
                            <img src={freshfood} alt="card-img-freshfood"/>
                            <div className="card-body">
                                <h2 className="fw-bold">Fresh Food</h2>
                                <p>Site de vente de produits frais en ligne</p>
                                <a href="https://www.freshfood.fr/" target="_blank" className="btn-web btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p>Site réalisé avec PHP et MySQL</p>
                            </div>
                        </div>
                    </div>
                    {/*card 2*/}
                    <div className="col-12 col-md6 col-lg-4">
                        <div className="card text-center h-100 hover-effect">
                            <img src={Akira} alt="card-img-restaurant-Akira"/>
                            <div className="card-body">
                                <h2 className="fw-bold">Fresh Food</h2>
                                <p>Site de vente de produits frais en ligne</p>
                                <a href="https://www.akirabackparis.com/fr/" target="_blank" className="btn-web btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p>Site réalisé avec WordPress</p>
                            </div>
                        </div>
                    </div>
                    {/*card 3*/}
                    <div className="col-12 col-md6 col-lg-4">
                        <div className="card text-center h-100 hover-effect">
                            <img src={BienEtre} alt="card-img-BienEtre"/>
                            <div className="card-body">
                                <h2 className="fw-bold">Espace bien-être</h2>
                                <p>Site de vente de produits frais en ligne</p>
                                <a href="https://www.espace-bienetre.com/" target="_blank" className="btn-web btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p>Site réalisé avec LARAVEL</p>
                            </div>
                        </div>
                    </div>
                {/* ----- */}
                </div>

                {/*card ligne 2*/}
                <div className="row g-4 justify-content-center">
                    {/*card 4*/}
                    <div className="col-12 col-md6 col-lg-4">
                        <div className="card text-center h-100 hover-effect">
                            <img src={SEOimg} alt="card-img-SEO"/>
                            <div className="card-body">
                                <h2 className="fw-bold">SEO</h2>
                                <p>Amélioration du référencement d'un site e-commerce</p>
                                <a href="https://www.seo.fr/" target="_blank" className="btn-web btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p>Utilisation des outils SEO</p>
                            </div>
                        </div>
                    </div>
                    {/*card 5*/}
                    <div className="col-12 col-md6 col-lg-4">
                        <div className="card text-center h-100 hover-effect">
                            <img src={APIimg} alt="card-img-API"/>
                            <div className="card-body">
                                <h2 className="fw-bold">Création d'une API</h2>
                                <p>Création d'une API RESTFULL publique</p>
                                <a href="https://www.redhat.com/fr/topics/api/what-are-application-programming-interfaces" target="_blank" className="btn-web btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p>PHP - SYMPHONY</p>
                            </div>
                        </div>
                    </div>
                    {/*card 6*/}
                    <div className="col-12 col-md6 col-lg-4">
                        <div className="card text-center h-100 hover-effect">
                            <img src={maquette} alt="card-img-desk-pc"/>
                            <div className="card-body">
                                <h2 className="fw-bold">Maquette d'un site web</h2>
                                <p>Création du prototype d'un site</p>
                                <a href="https://www.figma.com/login" target="_blank" className="btn-web btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p>Réalisé avec FIGMA</p>
                            </div>
                        </div>
                    </div>
            {/* ----- */}
                </div>
            </div>
            <style jsx>{`
                .hover-effect:hover {
                background-color: #efefef;
                }
            `}</style>
        </>
    )
}

export default Portfolio;