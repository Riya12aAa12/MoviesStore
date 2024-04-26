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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <a className="icon" href="https://github.com/Komalraut2002" >
                        <FaGithub style={{ color: 'white' }}/>
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/komalkumari30">
                        <FaLinkedin style={{ color: 'white' }}/>
                    </a>
                </div>
                <div className="copyright">
                <FaCopyright/> Komal 2024
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;