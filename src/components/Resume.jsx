import React from 'react';

const Resume = () => {
    return (
        <div className="relative py-10 px-4 sm:px-8">
            <div className="relative max-w-4xl mx-auto text-center text-white">
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 inline-block pb-2 transition-all duration-300 border-b-2 border-transparent hover:border-white transform hover:scale-105">
                    My Resume
                </h3>

                <div className="mt-8">
                    <a
                        href="/resume/Sagar_Kumar_Resume.pdf"
                        className="text-lg font-semibold text-blue-400 hover:text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download My Resume
                    </a>
                </div>

                <div className="mt-8">
                    <p className="text-lg text-white font-medium">Highlights:</p>
                    <ul className="list-disc list-inside text-white">
                        <li>Almost 3 years of experience in software development</li>
                        <li>Proficient in Java, Spring Boot, Spring Security</li>
                        <li>Familiar with Node JS, React JS,React Native, Angular</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <p className="text-lg font-medium text-white">Experience:</p>
                    <ul className="list-decimal list-inside text-white">
                        <li>Software Developer @SD123 Software Technology LLP (Sept-2023 to Present)</li>
                        <li>Associate Software Engineer @RxLogix Corporation (Fab-2022 to Aug-2023)</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <a
                        href="https://www.linkedin.com/in/sagar-kumar-59a037194/"
                        className="text-lg font-semibold text-blue-400 hover:text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View My LinkedIn Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
