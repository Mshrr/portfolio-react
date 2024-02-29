import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function Journey() {
    return (
        <div className="journey container">
            <h2 className="text-info fw-bold text-center">Journey</h2>
            <div className="row text-white">
                <div className="education col border-start border-info border-3 me-4 ps-4 pb-0">
                    <h3 className="text-info"><b>Education</b></h3>
                    <div className="box-education be1 border border-info rounded p-3 mb-4">
                        <div className="dot"></div>
                        <p className="text-info-emphasis"><FontAwesomeIcon icon={faCalendarDays} /> 2022 - Ongoing</p>
                        <h4>STMIK IKMI CIREBON</h4>
                        <p>gain knowledge in the field of web development and gain knowledge in the field of geospatial data when interning at DISKOMINFO.</p>
                    </div>
                    <div className="box-education border border-info rounded p-3 mb-4">
                        <div className="dot"></div>
                        <p className="text-info-emphasis"><FontAwesomeIcon icon={faCalendarDays} /> 2019 - 2022</p>
                        <h4>MAN 3 BUNTET PESANTREN CIREBON</h4>
                        <p>acquire knowledge in general and religious disciplines.</p>
                    </div>
                    <div className="box-education border border-info rounded p-3">
                        <div className="dot"></div>
                        <p className="text-info-emphasis"><FontAwesomeIcon icon={faCalendarDays} /> 2019 - 2022</p>
                        <h4>PONDOK AL-TA'AWUN BUNTET PESANTREN CIREBON</h4>
                        <p>gain deeper knowledge in religious disciplines by studying previous scientific books.</p>
                    </div>
                </div>
                <div className="experience col border-start border-info border-3 ps-4">
                    <h3 className="text-info"><b>Experience</b></h3>
                    <div className="box-experience be2 border border-info rounded p-3 mb-4">
                        <div className="dot"></div>
                        <p className="text-info-emphasis"><FontAwesomeIcon icon={faCalendarDays} /> 2024 - Ongoing</p>
                        <h4>Data Analyst at DISKOMINFO</h4>
                        <p>Gain experience as a data analyst which includes creating geospatial data and publishing that data.</p>
                    </div>
                    <div className="box-experience border border-info rounded p-3 mb-4">
                        <div className="dot"></div>
                        <p className="text-info-emphasis"><FontAwesomeIcon icon={faCalendarDays} /> 2019 - 2022</p>
                        <h4>Project-Based Virtual Intern : SEO Outreach -
Niagahoster x Rakamin Academy</h4>
                        <p>gain experience in digital marketing strategies aimed at increasing the visibility of websites or web pages in search engines using SEMrush.</p>
                    </div>
                    <div className="box-experience border border-info rounded p-3">
                        <div className="dot"></div>
                        <p className="text-info-emphasis"><FontAwesomeIcon icon={faCalendarDays} /> 2019 - 2022</p>
                        <h4>Project-Based Virtual Intern : Front End Developer -
Core Initiative x Rakamin Academy</h4>
                        <p>Can create e-commerce landing page projects using the VueJs framework and API.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journey;