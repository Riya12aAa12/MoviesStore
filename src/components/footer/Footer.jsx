import React from "react";

import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaCopyright,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <a className="icon" href="https://github.com/Riya12aAa12" >
                        <FaGithub style={{ color: 'white' }}/>
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/riya-kumari-202930221">
                        <FaLinkedin style={{ color: 'white' }}/>
                    </a>
                </div>
                <div className="copyright">
                <FaCopyright/> Riya 2024
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
