import React from 'react';
import {Link} from 'react-scroll'; // Import Link from react-scroll

const Navigation = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
            <ul className="flex justify-center space-x-8">
                <li>
                    <Link
                        to="aboutMe"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        About me
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to="education"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Education
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="github"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        GitHub
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Get in touch
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
