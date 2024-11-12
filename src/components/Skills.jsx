import React from 'react';
import {coreSkills, skills} from '../constants/Constants';
import GFGIcon from '../assets/icons/GFGIcon.svg';
import LeetcodeIcon from '../assets/icons/LeetcodeIcon.svg';

const Skills = () => {
    return (
        <div className="relative py-10">
            <div className="max-w-4xl mx-auto text-center">

                <div>
                    <h2 className="text-4xl font-bold text-white mb-6 inline-block pb-2 transition-all duration-300 border-b-2 border-transparent hover:border-white">
                        Skills
                    </h2>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-white mb-6 inline-block pb-2 transition-all duration-300 border-b-2 border-transparent hover:border-white py-10">
                        Programming Skills
                    </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-6 gap-8 mt-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-white transition-transform transform hover:scale-110 hover:text-blue-400"
                        >
                            <div className="text-4xl mb-2 hover:animate-pulse">
                                {skill.icon || <span className="text-2xl">•</span>}
                            </div>
                            <p className="text-lg text-gray-400">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center py-16">
                <h2 className="text-3xl font-bold text-white mb-6 inline-block pb-2 transition-all duration-300 border-b-2 border-transparent hover:border-white">
                    Core Subjects
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8">
                    {coreSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-white transition-transform transform hover:scale-110 hover:text-blue-400"
                        >
                            <div className="text-4xl mb-2 hover:animate-pulse">
                                {skill.icon || <span className="text-2xl">•</span>}
                            </div>
                            <p className="text-lg text-gray-400">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center py-16">
                <h2 className="text-3xl font-bold text-white mb-6 inline-block pb-2 transition-all duration-300 border-b-2 border-transparent hover:border-white">
                    Competitive Programming
                </h2>

                <div className="flex justify-center gap-16 sm:gap-40 mt-8 ">
                    <a
                        href="https://www.geeksforgeeks.org/user/sagar1910/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-lg text-gray-400 hover:underline text-4xl mb-2 hover:animate-pulse transition-transform transform hover:scale-110"
                    >
                        <img
                            src={GFGIcon}
                            alt="GeeksforGeeks Icon"
                            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                        />
                        <span>GeeksforGeeks</span>
                    </a>

                    <a
                        href="https://leetcode.com/u/sagar1910/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-lg text-gray-400 hover:underline text-4xl mb-2 hover:animate-pulse transition-transform transform hover:scale-110"
                    >
                        <img
                            src={LeetcodeIcon}
                            alt="LeetCode Icon"
                            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                        />
                        <span>LeetCode</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Skills;
