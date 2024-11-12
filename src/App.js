import React from 'react';
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Github from './components/Github';
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import './App.css'; // Import the CSS file for styles

const App = () => {
    return (
        <Layout>
            <div>
                <Navigation/>

                <div id="aboutMe" className="pt-10">
                    <AboutMe/>
                </div>

                <section id="skills">
                    <Skills/>
                </section>

                <section id="education">
                    <Education/>
                </section>

                <section id="projects">
                    <Projects/>
                </section>

                <section id="github">
                    <Github/>
                </section>

                <section id="contact">
                    <Contact/>
                </section>
            </div>
        </Layout>
    );
};

export default App;
