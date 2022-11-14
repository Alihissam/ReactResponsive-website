import React, { useEffect } from 'react'
import home from "../images/home.png"
import About from "./About"
import Features from "./Features"
import Services from "./Services"
import Faq from "./Faq"
import Contact from "./Contact"
import AOS from 'aos';
import "aos/dist/aos.css";

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])

    return (
        <>
            <div>
                <div className="container home-section">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 order-lg-1 order-2 "
                            style={{ marginTop: "35px" }} data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <span className="head" style={{ marginBottom: "30px", display: "flex" }}>Welcome to our site</span>
                            <h1 className="heading">Expert SEO, SEM Services in London</h1>
                            <p className="para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p className="button"><a href="#" className="btn btn-primary mr-2 download-button">How we work</a> <a href="#" className="btn btn-outline-primary download-contact-button">Contact us</a></p>
                        </div>
                        <div className="col-lg-6 col-md-6 order-lg-2 order-1 "
                            style={{ justifyContent: "end", paddingTop: "30px", paddingLeft: "100px" }}
                            data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <img src={home} alt="home" className="img-fluid home-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="/about">
                <About />
            </div>
            <div id="/features">
                <Features />
            </div>
            <div id="/services">
                <Services />
            </div>
            <div id="/faq">
                <Faq />
            </div>
            <div id="/contact">
                <Contact />
            </div>
        </>
    )
}

export default Home
