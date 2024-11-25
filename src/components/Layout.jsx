import React from 'react';
import bgImage from '../assets/images/bg-image.jpg';
import { FaWhatsapp } from 'react-icons/fa';

const Layout = ({ children }) => {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundAttachment: 'fixed',
            }}
        >
            {children}

            <a
                href="https://wa.me/9648185419"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 bg-green-500 rounded-full p-5 shadow-lg text-white text-2xl md:text-3xl lg:text-4xl transition-transform transform hover:scale-110"
                style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
            >
                <FaWhatsapp />
            </a>
        </div>
    );
};

export default Layout;
