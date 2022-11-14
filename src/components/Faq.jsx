import React, { useEffect } from 'react'
import faq from "../images/faq.png"
import AOS from 'aos';
import "aos/dist/aos.css";

const Faq = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])

    return (
        <div id="faq" style={{ paddingTop: "100px", paddingBottom: "90px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-lg-1 order-2" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                            <span className="faq-head" >FAQ</span>
                            <h1 className="faq-content mt-3" >Frequently Asked Questions</h1>
                            <p className="mb-5 mt-4" >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p className=""><a className="btn btn-primary mr-2 " className="download-button ">How we work</a> <a className="btn btn-outline-primary" className="download-contact-button">Contact us</a></p>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1 order-1  " data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div style={{ paddingTop: "80px", paddingBottom: "100px", textAlign: "center" }}>
                            <img src={faq} alt="faq" className="img-fluid faq-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
