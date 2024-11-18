import React from 'react';

const Mobil = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Android Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"/>
                        <div>
                            <h3 className="skills__name">Kotlin</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"/>
                        <div>
                            <h3 className="skills__name">Coroutine</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"/>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"/>
                        <div>
                            <h3 className="skills__name">Android SDK</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"/>
                        <div>
                            <h3 className="skills__name">Jetpack Compose</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"/>
                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mobil;