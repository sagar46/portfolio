import React from 'react';
import githubLogo from '../assets/icons/GithubLogo.svg';

const Projects = () => {
    return (
        <div className="relative py-16">
            <div className="relative max-w-4xl mx-auto text-center">
                <h3 className="text-4xl font-bold text-white mb-6 inline-block pb-2 transition-all duration-300 border-b-2 border-transparent hover:border-white">
                    Projects
                </h3>
                <div className="space-y-10 mt-8">
                    {/* Weather Prediction App */}
                    <div className="p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold text-white mb-2">Weather Prediction App</h3>
                        <p className="text-gray-400">KIET Group of Institutions, Ghaziabad</p>
                        <p className="text-gray-500">Date: 3 months</p>
                        <ul className="text-gray-400 mt-2">
                            <li>• Developed weather prediction system using Java and Spring Boot.</li>
                            <li>• Integrated machine learning algorithms for accurate forecasts.</li>
                            <li>• Created user-friendly interface for personalized weather predictions.</li>
                        </ul>
                    </div>

                    {/* E-commerce Project */}
                    <div className="p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold text-white mb-2">E-commerce Project</h3>
                        <p className="text-gray-400">KIET Group of Institutions, Ghaziabad</p>
                        <p className="text-gray-500">Date: 4 months</p>
                        <ul className="text-gray-400 mt-2">
                            <li>• Developed and implemented customer-facing e-commerce website using Java and Spring
                                Boot.
                            </li>
                            <li>• Developed using Java Spring Boot, Hibernate, HTML, and CSS technologies.</li>
                            <li>• With a robust backend powered by Spring Boot and Hibernate.</li>
                        </ul>
                        <a href="https://github.com/sagar46/e-com" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub" className="w-12 h-12 inline-block mt-4"/>
                        </a>
                    </div>

                    {/* Online Code Compiler */}
                    <div className="p-6 rounded-lg  transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold text-white mb-2">Online Code Compiler</h3>
                        <p className="text-gray-400">KIET Group of Institutions, Ghaziabad</p>
                        <p className="text-gray-500">Date: 2 months</p>
                        <p className="text-gray-400 mt-2">A user-friendly platform built with Java and Spring Boot for
                            writing, compiling, and executing code in multiple programming languages. It offers a
                            web-based editor with syntax highlighting and error checking, immediate feedback on code
                            execution, and supports collaboration. Security measures ensure...</p>
                        <a href="https://github.com/sagar46/OnlineCodeCompile" target="_blank"
                           rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub" className="w-12 h-12 inline-block mt-4"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
