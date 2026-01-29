import herobg from "../assets/images/hero-bg.jpg"
import aboutImg from "../assets/images/john-doe-about.jpg"

function Home () {
    return (
        <>
        {/*Home-hero*/}
            <section className="home-hero position-relative vh-100 d-flex align-items-center" style={{background:`url(${herobg})`, backgroundSize:"cover", backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{opacity:0.5}}></div>
                <div className="container position-relative z-1 text-center text-white">
                    <h1 className="display-1 fw-bold">Bonjour, je suis John Doe</h1>
                    <h2 className="display-3 fw-bold mt-5">Développeur web full stack</h2>
                    <button type="button" className="btn btn-danger mt-2 px-3" data-bs-toggle="modal" data-bs-target="#githbModal">En savoir plus</button>
                </div>
            </section>

        {/*About + skills*/}
            <section className="py-5 mt-4">
                <div className="container shadow border-0 p-4 row g-4 mx-auto">
                    {/*About*/}
                    <div className="col-12 col-lg-6">
                        <h3 className="mb-5 border-bottom border-primary border-3 pb-2">A propos</h3>
                        <img src={aboutImg} alt="John Doe Profile" className="img-fluid w-100 mb-3"/>
                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
                    </div>
                    {/* Skills */}
                    <div className="col-12 col-lg-6">
                        <h3 className="mb-5 border-bottom border-primary border-3 pb-2">Mes compétences</h3>
                        <div className="mb-4">
                            <h4 className="fs-5">HTML5 90%</h4>
                            <div className="progress">
                                <div className="progress-bar bg-danger" style={{width:"90%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="fs-5">CSS3 80%</h4>
                            <div className="progress">
                                <div className="progress-bar bg-info" style={{width:"80%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="fs-5">JAVASCRIPT 70%</h4>
                            <div className="progress">
                                <div className="progress-bar bg-warning" style={{width:"70%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="fs-5">PHP 60%</h4>
                            <div className="progress">
                                <div className="progress-bar bg-success" style={{width:"60%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="fs-5">REACT 50%</h4>
                            <div className="progress">
                                <div className="progress-bar bg-primary" style={{width:"50%"}}></div>
                            </div>
                        </div>              
                    </div>
                    {/* ----- */}
                </div>
            </section>    
        </>
    )
}

export default Home;