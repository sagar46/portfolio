import React from 'react';

const Education = () => {
    return (
        <div className="relative py-10 fade-in">
            <div className="relative max-w-4xl mx-auto text-center">
                <h3 className="text-4xl font-bold text-white mb-6 inline-block pb-2 transition-all duration-300 border-b-2 border-transparent hover:border-white">
                    Education
                </h3>

                <div className="space-y-10">
                    {/* B.Tech Section */}
                    <div className="p-6 rounded-lg transition-transform duration-300 transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-white mb-2">B.Tech in Computer Science</h3>
                        <p className="text-white">College: KIET Group of Institutions, Ghaziabad, (U.P.)</p>
                        <p className="text-gray-400">University: Abdul Kalam Technical University</p>
                        <p className="text-gray-500">From: Aug-2018 To: May-2022 </p>
                        <p className="text-gray-400 mt-2">
                            <span className="font-bold">Subjects:</span> Data Structures and Algorithms,
                            Computer Networks, Operating System,
                            Software Development Life Cycle,
                            Database Management System
                        </p>
                    </div>

                    {/* Intermediate Section */}
                    <div className="p-6 rounded-lg transition-transform duration-300 transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-white mb-2">Intermediate (Science)</h3>
                        <p className="text-gray-400">B.B.S Inter College, Shivcuti, Allahabad, (U.P.)</p>
                        <p className="text-gray-500">From: Aug-2014 To: May-2016</p>
                        <p className="text-gray-400 mt-2">
                            <span className="font-bold">Subjects:</span> Physics, Chemistry, Mathematics
                        </p>
                    </div>

                    {/* High School Section */}
                    <div className="p-6 rounded-lg transition-transform duration-300 transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-white mb-2">High School</h3>
                        <p className="text-gray-400">S.J.L.N.R Inter College, Yamuna Math, Kasili, Deoria (U.P.)</p>
                        <p className="text-gray-500">From: July-2013 To: May-2014</p>
                        <p className="text-gray-400 mt-2">
                            <span className="font-bold">Subjects:</span> Science, Mathematics, English
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
