import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-5">
            <small>Copyright {<FontAwesomeIcon icon={faCopyright} />} Reserved by Dental-Healthcare-Services</small>
        </div>
    );
};

export default Footer;