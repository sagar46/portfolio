import React from 'react';
import profileImage from '../assets/images/Sagar_kumar.jpeg';
import {
    ABOUT_ME_DESCRIPTION,
    ABOUT_ME_DETAILS,
    ABOUT_ME_TITLE,
    CONTACT_SECTION_ID,
    GET_IN_TOUCH_TEXT,
} from '../constants/Constants';

function AboutMe() {
    return (
        <section>
            <div
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center p-8 transform transition-transform duration-300 py-16"
            >
                <div className="flex-shrink-0 w-full md:w-3/12 mb-5 md:mb-0 md:mr-8">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-64 h-64 object-cover rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <div className="w-full md:w-9/12 text-center md:text-left">
                    <h1
                        className="text-3xl font-bold text-white mb-6 inline-block pb-2 transition-all duration-300 border-b-2 border-transparent hover:border-white"
                        style={{fontFamily: "'Roboto Mono', monospace", letterSpacing: '2px'}}
                    >
                        {ABOUT_ME_TITLE}
                    </h1>
                    <p
                        className="text-xl text-gray-200 mb-4"
                        style={{fontFamily: "'Fira Code', monospace", letterSpacing: '1px'}}
                    >
                        {ABOUT_ME_DESCRIPTION}
                    </p>
                    <p
                        className="text-lg text-gray-400 mb-8 leading-relaxed"
                        style={{
                            fontFamily: "'Fira Code', monospace",
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        {ABOUT_ME_DETAILS}
                    </p>
                    <a
                        href={CONTACT_SECTION_ID}
                        className="inline-block bg-gray-800 text-white py-3 px-8 rounded-lg hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        {GET_IN_TOUCH_TEXT}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
