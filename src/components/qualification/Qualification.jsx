import React from 'react';
import "./qualification.css"

const Qualification = ({qualificationToggleState, setQualificationToggleTab}) => {
    return (
        <section className="qualification section" id="education">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            qualificationToggleState === 0 ?
                                "qualification__button qualification__active button--flex" :
                                "qualification__button button--flex"
                        }
                        onClick={() => setQualificationToggleTab(0)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>

                    <div
                        className={
                            qualificationToggleState === 1 ?
                                "qualification__button qualification__active button--flex" :
                                "qualification__button button--flex"
                        }
                        onClick={() => setQualificationToggleTab(1)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>
                </div>

                {/* ============== Education ================*/}
                <div className="qualification__sections">
                    <div className={
                        qualificationToggleState === 0 ?
                            "qualification__content qualification__content-active" :
                            "qualification__content"
                    }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Software Engineering, Msc</h3>
                                <span className="qualification__subtitle">Budapest University of Technology and Economics</span>
                                <div className="qualification__calendar">
                                    <i className="bx bx-calendar-alt"></i>
                                    2021 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Computer Software Engineering, Bsc</h3>
                                <span className="qualification__subtitle">Budapest University of Technology and Economics</span>
                                <div className="qualification__calendar">
                                    <i className="bx bx-calendar-alt"></i>
                                    2017 - 2021
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==============  Experience  ================= */}
                    <div className={
                        qualificationToggleState === 1 ?
                            "qualification__content qualification__content-active" :
                            "qualification__content"
                    }
                    >
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Android Developer</h3>
                                <span className="qualification__subtitle">Trendency Online Zrt. - Hungary</span>
                                <div className="qualification__calendar">
                                    <i className="bx bx-calendar-alt"></i>
                                    2023 - present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Junior Android Developer</h3>
                                <span className="qualification__subtitle">Autsoft Zrt. - Hungary</span>
                                <div className="qualification__calendar">
                                    <i className="bx bx-calendar-alt"></i>
                                    2022 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Devops Intern</h3>
                                <span className="qualification__subtitle">Telekom HU - Hungary</span>
                                <div className="qualification__calendar">
                                    <i className="bx bx-calendar-alt"></i>
                                    Jun 2021 - Dec 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Junior Unity3D Developer</h3>
                                <span className="qualification__subtitle">Printosh Advertising Kft. - Hungary</span>
                                <div className="qualification__calendar">
                                    <i className="bx bx-calendar-alt"></i>
                                    Jun 2020 - Dec 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;