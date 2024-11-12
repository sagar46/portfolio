import React from 'react';
import bgImage from '../assets/images/bg-image.jpg'; // Import your background image
import {FaWhatsapp} from 'react-icons/fa'; // Import the WhatsApp icon from react-icons

const Layout = ({children}) => {
    return (
        <div
            className="relative"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                minHeight: '100vh', // Ensures full height of the viewport
            }}
        >
            {children}

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/9648185419" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#25D366',
                    borderRadius: '50%',
                    padding: '20px', // Increased padding for a bigger button
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    color: '#fff',
                    fontSize: '40px', // Increased font size for a bigger icon
                }}
            >
                <FaWhatsapp/>
            </a>
        </div>
    );
};

export default Layout;
