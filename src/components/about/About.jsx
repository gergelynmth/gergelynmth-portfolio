import React from 'react';
import './about.css';
import AboutImage from "../../assets/geri.jpeg";
import Info from "./Info";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img className="about__img" src={AboutImage} alt="about"/>

                <div className="about__data">
                    <Info/>

                    <p className="about__description">With several years of experience in developing high-quality
                        Android applications, I bring both expertise and passion to my work. Outside of development, I
                        enjoy travelling, videography, video editing and sports, all of which inspire my creativity and
                        technical skills.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;