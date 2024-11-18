import React, {useState} from 'react'
import "./header.css"

const Header = ({setQualificationToggleTab}) => {
    /* Toggle Menu */
    const [Toggle, showMenu] = useState(false);

    const [activeLink, setActiveLink] = useState("#home");

    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">G. N.</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className={`nav__link ${activeLink === "#home" ? "active-link" : ""}`}
                               onClick={() => setActiveLink("#home")}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={() => setActiveLink("#about")}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={() => setActiveLink("#skills")}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#education" className="nav__link" onClick={() => {
                                setActiveLink("#education")
                                setQualificationToggleTab(0)
                            }
                            }>
                                <i className="uil uil-book nav__icon"></i> Education
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#experience" className="nav__link" onClick={() => {
                                setActiveLink("#experience")
                                setQualificationToggleTab(1)
                            }}>
                                <i className="uil uil-laptop nav__icon"></i> Experience
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={() => setActiveLink("#contact")}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i
                        className="uil uil-times nav__close"
                        onClick={() => showMenu(!Toggle)}
                    ></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>

            </nav>
        </header>
    )
}

export default Header