import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";

import "./style.scss";

const Footer = () => {
    const navigate = useNavigate();

    const navigationHandler = (type) => {
        if(type === "movie"){
          navigate("/explore/movie");
        }
        else if (type === "home"){
          navigate("/");
        }
        else{
            navigate("/explore/tv");
        }
      }

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem"onClick={() => navigationHandler("home")} >Home</li>
                    <li className="menuItem" onClick={() => navigationHandler("movie")}>Movie</li>
                    <li className="menuItem"onClick={() => navigationHandler("tv")}>TV Shows</li>
                </ul>
                <div className="infoText">
                   MovieX is an project in which you can search for movies and tv show
                   check their ratings and find movie that you love to watch. You can
                   also find the suggestion related to movies and tv show and their full
                   cast and you can also watch some related movie or tv shows stuff regarding
                   tv shows or movie.
                </div>
                <div className="socialIcons">
                    <a target="_blank"  rel='noopener noreferrer' href="https://www.facebook.com/">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    </a>
                    <a target="_blank"  rel='noopener noreferrer' href="https://www.instagram.com/">
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    </a>
                    <a target="_blank"  rel='noopener noreferrer' href="https://twitter.com/">
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    </a>
                    <a target="_blank"  rel='noopener noreferrer' href="https://www.linkedin.com/">
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;