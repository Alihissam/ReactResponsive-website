import React, { useEffect } from 'react'
import "./about.css"
import about from "../images/about.png"
import icon from "../images/icon.png"
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])

    return (
        <div id="about" style={{ paddingTop: "50px", paddingBottom: "10rem" }}>
            <div className="container">
                <div className="row " style={{ justifyContent: "space-between" }}>
                    <div className="col-lg-6 col-md-6  order-1 " data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div style={{ paddingTop: "80px" }}>
                            <img src={about} alt="about" className="img-fluid about-img" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 order-2 " data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div style={{ marginLeft: "30px", marginTop: "20px", paddingTop: "80px" }}>
                            <span className="about-content">About us</span>
                            <h2 class="heading mb-2">Why our agency?</h2>
                            <p className="mb-2 desc">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p class="mb-2 desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <ul class="list-check list-unstyled mb-4 desc">
                                <li className='desc'> <img src={icon} alt="" className='icon' />
                                    <span> Behind the word mountains</span></li>
                                <li className='desc'><img src={icon} alt="" className='icon' /><span> Bookmarksgrove right at the coast</span></li>
                                <li className='desc'><img src={icon} alt="" className='icon' /><span> Semantics, a large language</span></li>
                            </ul>
                            <p><a class="btn btn-primary" className="download-button">About us</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
