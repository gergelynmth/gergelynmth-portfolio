import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from "./components/about/About";
import Skills from "./components/skill/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import {useState} from "react";

function App() {
    const [qualificationToggleState, setQualificationToggleState] = useState(1);

    const handleQualificationToggleTab = (index) => {
        setQualificationToggleState(index);
        console.log(`Tab ${index} activated!`);
    };

    return (
        <>
            <Header setQualificationToggleTab={handleQualificationToggleTab}/>

            <main className='main'>
                <Home/>
                <About/>
                <Skills/>
                <Qualification qualificationToggleState={qualificationToggleState}
                               setQualificationToggleTab={handleQualificationToggleTab}/>
                <Contact/>
                <Footer setQualificationToggleTab={handleQualificationToggleTab}/>
            </main>
        </>
    );
}

export default App;
