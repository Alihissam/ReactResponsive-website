import React, { useEffect } from 'react'
import "./feature.css"
import { GiRocketThruster } from 'react-icons/gi';
import { CgLink } from 'react-icons/cg';
import { GiTrophyCup } from 'react-icons/gi';
import AOS from 'aos';
import "aos/dist/aos.css";



const Features = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])
    return (
        <div id="features" style={{ paddingTop: "100px", paddingBottom: "120px" }}>
            <div className="container">
                <div className="row">
                    <div className="main-section">
                        <div class="col-lg-5 mx-auto text-center aos-init aos-animate" data-aos="zoom-in-up">
                            <span class="subheading mb-2" className="head">Features</span>
                            <h1 class="heading mb-3">Our Features</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>
                    <div className="second-main-section d-flex" >
                        <div className="container">
                            <div className="row" >
                                <div className="col-lg-4 col-sm-12 " data-aos="zoom-in-up">
                                    <div class="feature text-center">
                                        <div className="icon">
                                            {/* <GiRocketThruster className="icons" /> */}
                                        </div>
                                        <h4>Marketing Analysis</h4>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4  col-sm-12 " data-aos="zoom-in-up">
                                    <div class="feature text-center">
                                        <div className="icon">
                                            {/* <CgLink className="icons" /> */}
                                        </div>
                                        <h4>Digital Marketing</h4>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4  col-sm-12 " data-aos="zoom-in-up">
                                    <div class="feature text-center">
                                        <div className="icon">
                                            {/* <GiTrophyCup className="icons" /> */}
                                        </div>
                                        <h4>SEO and Backlinks</h4>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div >
    )
}

export default Features
