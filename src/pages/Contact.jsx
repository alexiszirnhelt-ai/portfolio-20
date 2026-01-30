function Contact () {
    return (
        <>
            <section className="container text-center p-5">
                <h1 className="fw-bold">Contact</h1>
                <p>Pour me contacter en vue d'un entretion ou d'une future collaboration, merci de remplir le formulaire de contact</p>
                <div className="mx-auto mt-4" style={{
                    height:"5px",
                    width:"500px",
                    backgroundColor:"#0d6efd",
                }}></div>
            </section>

            {/*Contact-content*/}
            <div className="container shadow border-0 p-4 row g-4 mx-auto my-5">
                {/*Contact-form*/}
                <section className="col-md-6">
                    <h2 className="fw-bold mb-5 border-bottom border-primary border-3 pb-2">Formulaire de contact</h2>
                    <div>
                        <form action="/action_page.php" className="was-validated">
                            {/* Votre nom */}
                            <div className="mb-2">
                                <input type="name" className="form-control" id="name" placeholder="Votre nom" name="name" required/>
                                <div className="valid-feedback">Nom valide.</div>
                                <div className="invalid-feedback">Veuillez remplir ce champ.</div>
                            </div>
                            {/*Votre adresse email */}
                            <div className="mb-2">
                                <input type="email" className="form-control" id="email" placeholder="Votre adresse email" name="email" required/>
                                <div className="valid-feedback">Adresse email valide.</div>
                                <div className="invalid-feedback">Veuillez remplir ce champ.</div>
                            </div>
                            {/*Votre numéro de téléphone */}
                            <div className="mb-2">
                                <input type="phone" className="form-control" id="phone" placeholder="Votre numéro de téléphone" name="phone" required/>
                                <div className="valid-feedback">Numéro de téléphone valide.</div>
                                <div className="invalid-feedback">Veuillez remplir ce champ.</div>
                            </div>
                            {/*sujet */}
                            <div className="mb-2">
                                <input type="subject" className="form-control" id="subject" placeholder="Sujet" name="subject" required/>
                            </div>
                            {/*Votre message */}
                            <div className="mb-2">
                                <textarea className="form-control" placeholder="Votre message" name="text" id="comment" rows="6" required></textarea>
                                <div className="invalid-feedback">Veuillez remplir ce champ.</div>
                            </div>
                            {/*Bouton */}
                            <div className="button-send text-center">
                                <button type="submit" className="btn btn-primary">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </section>
                {/*Contact details*/}
                <section className="col-md-6">
                    <h2 className="fw-bold mb-5 border-bottom border-primary border-3 pb-2">Mes coordonnées</h2>
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
                    <div className="ratio ratio-16x9">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.2539315082095!2d4.796403976715944!3d45.7786657124015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sfr!2snl!4v1769705918572!5m2!1sfr!2snl" width="600" height="500" style={{border: 0, borderRadius: "5px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>
            {/* ----- */}
            </div>
        </>
    )
}

export default Contact;