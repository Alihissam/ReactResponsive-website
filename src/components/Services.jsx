import React, { useEffect } from 'react'
import "./services.css"
import { BsShieldCheck } from 'react-icons/bs';
import { GoMegaphone } from 'react-icons/go';
import { FaFileContract } from 'react-icons/fa';
import { GiRocketThruster } from 'react-icons/gi';
import { CgLink } from 'react-icons/cg';
import { GiTrophyCup } from 'react-icons/gi';
import AOS from 'aos';
import "aos/dist/aos.css";

const Services = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])

    return (
        <div id="services" style={{ paddingTop: "80px", paddingBottom: "120px" }}>
            <div className="container">
                <div className="row">
                    <div class="col-lg  text-center" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h3 className="subheading services">Services</h3>
                        <h2 class="heading">Our Services</h2>
                    </div>
                    <div className="main-section d-flex" style={{ textAlign: "center", paddingTop: "50px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4  col-sm-12 " data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000">
                                    <div className=" ">
                                        <BsShieldCheck className="card-icon" />
                                        <div class="text">
                                            <h3>Design Marketing</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12 " data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000">
                                    <div className="">
                                        < GiTrophyCup className="card-icon" />
                                        <div class="text">
                                            <h3>Internet Marketing</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4  col-sm-12 " data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000">
                                    <div className="">
                                        <FaFileContract className="card-icon" />
                                        <div class="text">
                                            <h3>Internet Marketing</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4  col-sm-12 " data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000">
                                    <div className=" ">
                                        <BsShieldCheck className="card-icon" />
                                        <div class="text">
                                            <h3>Design Marketing</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12 " data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000">
                                    <div className="">
                                        <CgLink className="card-icon" />
                                        <div class="text">
                                            <h3>Internet Marketing</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4  col-sm-12 " data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000">
                                    <div className="">
                                        <GiRocketThruster className="card-icon" />
                                        <div class="text">
                                            <h3>Internet Marketing</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
