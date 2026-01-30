function MentionsLegales () {
    return (
        <>
            <section className="container text-center p-5">
                <h1 className="fw-bold">Mentions légales</h1>
                <div className="mx-auto mt-4" style={{
                    height:"5px",
                    width:"500px",
                    backgroundColor:"#0d6efd",
                }}></div>
            </section>

            {/*Accordeon*/}
            <div id="accordion" className="container my-5">
                {/*Accordeon 1*/}
                <div className="card">
                    <div className="card-header card-header-hover">
                        <a className="btn w-100 d-flex justify-content-between align-items-center" data-bs-toggle="collapse" href="#collapseOne"><span>Editeur du site</span><i className="bi bi-chevron-down"></i></a>        
                    </div>
                    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                        <div className="card-body">
                            <h3>John Doe</h3>
                            <address>
                                <div>
                                    <i className="bi bi-map"><span className="ms-2 fst-normal">40 rue Laure Diebold</span></i>   
                                </div>
                                <div>
                                    <i className="bi bi-geo-alt"><span className="ms-2 fst-normal">69009 Lyon, France</span></i>   
                                </div>
                                <div>
                                    <a href="tel:1020304050" className="text-decoration-none text-body">
                                        <i className="bi bi-phone"></i><span className="ms-2">10 20 30 40 50</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="mailto:john.doe@gmail.com" className="text-decoration-none text-body">
                                        <i className="bi bi-envelope-at"></i><span className="ms-2">john.doe@gmail.com</span>
                                    </a>
                                </div>
                            </address>
                        </div>
                    </div>
                </div>
                {/*Accordeon 2*/}
                <div className="card">
                    <div className="card-header card-header-hover">
                        <a className="collapsed btn d-flex justify-content-between align-items-center" data-bs-toggle="collapse" href="#collapseTwo"><span>Hébergeur</span><i className="bi bi-chevron-down"></i></a>
                    </div>
                    <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            <h3>alwaysdata</h3>
                            <address>
                                <p>91 Rue du Faubourg Saint-Honoré, 74008 Paris</p>
                                <i className="bi bi-globe me-2"></i>
                                <a href="https://www.alwaysdata.com/fr/" target="_blanck">www.alwaysdata.com</a>
                            </address>
                        </div>
                    </div>
                </div>
                {/*Accordeon 3*/}
                <div className="card">
                    <div className="card-header card-header-hover">
                        <a className="collapsed btn d-flex justify-content-between align-items-center" data-bs-toggle="collapse" href="#collapseThree"><span>Crédits</span><i className="bi bi-chevron-down"></i></a>
                    </div>
                    <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            <h3>Crédits</h3>
                            <p>ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank">Centre Européen de formation</a></p>
                            <p className="fst-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/"target="_blank">Pixabay</a></p>
                            <p className="fst-italic">La favicon de ce site a été fournie par <a href="https://www.flaticon.com/fr/" target="_blank">John doe Icons erstellt vos Freepik-Flaticon</a></p>
                        </div>
                    </div>
                </div>
            {/* ----- */}
            <style jsx>{`
                .card-header-hover:hover {
                    background-color: rgba(13, 110, 253, 0.5);
                    transition: background-color 0.3s ease;
                }          
            `}</style>
            </div>
        </>
    )
}

export default MentionsLegales;