import React from 'react';
import "./footer.css"

const Footer = ({ setQualificationToggleTab }) => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Gergely Németh</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#education" className="footer__link" onClick={() => setQualificationToggleTab(0)}>
                            Education
                        </a>
                    </li>

                    <li>
                        <a href="#education" className="footer__link" onClick={() => setQualificationToggleTab(1)}>
                            Experience
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/gergely-nmth/" className="footer__social-icon" target="_blank"
                       rel="noreferrer">
                        <i className="uil uil-linkedin"></i>
                    </a>

                    <a href="https://github.com/gergelynmth" className="footer__social-icon" target="_blank"
                       rel="noreferrer">
                        <i className="uil uil-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;