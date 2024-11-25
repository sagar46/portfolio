import React, { useState } from 'react';
import facebookLogo from '../assets/icons/FacebookIcon.svg'; // Update with the correct path
import linkedinLogo from '../assets/icons/LinkedInIcon.svg'; // Update with the correct path

const Contact = () => {
    const [emailCopied, setEmailCopied] = useState(false);
    const [phoneCopied, setPhoneCopied] = useState(false);

    // Function to copy text to clipboard and change button text color
    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text).then(() => {
            if (type === "email") {
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 1500); // Reset after 1.5 seconds
            } else if (type === "phone") {
                setPhoneCopied(true);
                setTimeout(() => setPhoneCopied(false), 1500); // Reset after 1.5 seconds
            }
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className="relative py-10 bg-gradient-to-b">
            <div className="relative max-w-4xl mx-auto text-center text-white">
                <h3 className="text-4xl font-bold mb-6 inline-block pb-2 transition-all duration-300 border-b-2 border-transparent hover:border-white transform hover:scale-105">
                    Get in Touch
                </h3>
                <p className="text-xl mb-8 px-6">
                    Feel free to reach out for any inquiries, collaborations, or just to connect. I'm always open to discussing new opportunities, sharing ideas, and offering assistance. Whether you have a question about my work, need advice on a project, or simply want to network, don't hesitate to get in touch. I look forward to hearing from you!
                </p>

                <div className="space-y-6">
                    {/* Email Section */}
                    <div className="flex flex-col md:flex-row justify-center items-center space-x-4 md:space-x-6">
                        <p className="text-2xl font-medium text-white">Email:</p>
                        <span className="text-2xl text-blue-200 font-medium">sagar.kr1910@gmail.com</span>
                        <button
                            onClick={() => copyToClipboard("sagar.kr1910@gmail.com", "email")}
                            className={`px-4 py-2 rounded-lg text-lg transition-all duration-300 transform ${emailCopied ? 'text-green-400' : 'text-blue-400'} hover:text-blue-500 hover:scale-105 font-semibold`}
                        >
                            {emailCopied ? "Copied!" : "Copy Email"}
                        </button>
                    </div>

                    {/* Phone Section */}
                    <div className="flex flex-col md:flex-row justify-center items-center space-x-4 md:space-x-6">
                        <p className="text-2xl font-medium text-white">Phone:</p>
                        <span className="text-2xl text-blue-200 font-medium">9648185419</span>
                        <button
                            onClick={() => copyToClipboard("9648185419", "phone")}
                            className={`px-4 py-2 rounded-lg text-lg transition-all duration-300 transform ${phoneCopied ? 'text-green-400' : 'text-blue-400'} hover:text-blue-500 hover:scale-105 font-semibold`}
                        >
                            {phoneCopied ? "Copied!" : "Copy Phone"}
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center items-center space-x-8 mt-6">
                        {/* Facebook Icon */}
                        <a
                            href="https://www.facebook.com/profile.php?id=100025404579487"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-300 transform hover:scale-110 hover:opacity-80"
                        >
                            <img
                                src={facebookLogo}
                                alt="Facebook Logo"
                                className="h-12 w-12"
                            />
                        </a>

                        {/* LinkedIn Icon */}
                        <a
                            href="https://www.linkedin.com/in/sagar-kumar-59a037194/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-300 transform hover:scale-110 hover:opacity-80"
                        >
                            <img
                                src={linkedinLogo}
                                alt="LinkedIn Logo"
                                className="h-12 w-12"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
