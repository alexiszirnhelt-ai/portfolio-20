import banner from "..//assets/images/banner.jpg"

function Services () {
    return (
        <>
            <img src={banner} alt="banner-portfolio"/>
            <section className="container text-center p-5">
                <h1 className="fw-bold">Mon offre de services</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
                <div className="mx-auto mt-4" style={{
                    height:"5px",
                    width:"500px",
                    backgroundColor:"#0d6efd",
                }}></div>
            </section>

            {/*3 cards*/}
            <div className="d-flex justify-content-center gap-4 py-5">
                {/* card ux design*/}
                <div className="card shadow-sm hover-effect" style={{width:"400px"}}>
                    <div className="card-content text-center">
                        <div className="mt-5 mb-3">
                            <i className="bi bi-brush text-primary fs-2"></i>
                        </div>
                        <div className="card-body">
                            <h2 className="fw-bold">UX DESIGN</h2>
                            <p>L'UX design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préocupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
                        </div>
                    </div>
                </div>
                {/* card Dévelopement web*/}
                <div className="card shadow-sm hover-effect" style={{width:"400px"}}>
                    <div className="card-content text-center">
                        <div className="mt-5 mb-3">
                            <i className="bi bi-code-slash text-primary fs-2"></i>
                        </div>
                        <div className="card-body">
                            <h2 className="fw-bold">Développement web</h2>
                            <p>Le développement de sites web consiste à créer des sites internet en utilisant des langes de programmation (HTML,CSS,JavaScript,PHP, etc.) et des frameworks(Bootstrap,React,Angular, etc.)</p>
                        </div>
                    </div>
                </div>
                {/* card Réferencement*/}
                <div className="card shadow-sm hover-effect" style={{width:"400px"}}>
                    <div className="card-content text-center">
                        <div className="mt-5 mb-3">
                            <i className="bi bi-search text-primary fs-2"></i>
                        </div>
                        <div className="card-body">
                            <h2 className="fw-bold">Réferencement</h2>
                            <p>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google,Bing,Yahou,etc.). L'objectif est d'attirer un maximu de visiteurs qualifiés sur le site.</p>
                        </div>
                    </div>
                </div>
            {/* ----- */}
            </div>
            <style jsx>{`
                .hover-effect:hover {
                background-color: #efefef;
                }
            `}</style>
        </>
    )
}

export default Services;