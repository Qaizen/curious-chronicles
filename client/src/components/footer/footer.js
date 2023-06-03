import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-text">&copy; 2023 Curious Chronicles LLC</p>
      </div>
      <div className="footer-center">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
        </a>
        <a href="https://discordapp.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} className="footer-icon" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="footer-icon" />
        </a>
      </div>
      <div className="footer-right">
        <p className="footer-text">Never Back Down</p>
      </div>
    </footer>
  );
};

export default Footer;
