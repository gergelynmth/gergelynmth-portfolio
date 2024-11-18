import React from 'react';
import './skills.css';
import Mobil from "./Mobil";
import Frontend from "./Frontend";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <Mobil></Mobil>
                <Frontend></Frontend>
            </div>
        </section>
    );
};

export default Skills;