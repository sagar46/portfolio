import React, { useState } from "react";
import { Link } from "react-scroll";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white fixed w-full top-0 z-50">
            <div className="flex justify-between items-center px-4 py-3">
                <div className="text-lg font-bold">Sagar Kumar</div>
                <button
                    className="sm:hidden text-gray-200 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
                <ul className="hidden sm:flex space-x-8">
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
                            to="resume"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-gray-400"
                        >
                            Resume
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
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <ul className="sm:hidden bg-gray-800 text-white flex flex-col space-y-2 p-4">
                    <li>
                        <Link
                            to="aboutMe"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-gray-400"
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
                        >
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="resume"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-gray-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-gray-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Get in touch
                        </Link>
                    </li>

                </ul>
            )}
        </nav>
    );
};

export default Navigation;
