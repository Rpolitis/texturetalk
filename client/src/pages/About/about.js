import React from "react";
import './about.css';
import { Paper } from "@mui/material";

const About = () => {
    return (
        <>
        <div className="about">
            <Paper>
            <h1 className="aboutTitle">ABOUT US</h1>
            <img src="img.jpg" alt="Texturetalk"></img>
            <p>Texture talk is a social media website for hair care and styling where users create profiles with tags specifying hair type, thickness, porosity, length, and color. Users share photos, videos, routines, and product reviews. The application facilitates easy searches, presenting profiles matching the user's specific criteria, providing inspiration and advice for personalized hair care routines and styles.</p>
            </Paper>
        </div>
        <Paper className="teamContent">
        <h1 className="teamTitle">MEET THE TEAM</h1>
        <div className="team">
            <div className="david">
                <img src="img.jpg" alt="David Sun"></img>
                <h2>David Sun</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="ryan">
                <img src="img.jpg" alt="Ryan Politis"></img>
                <h2>Ryan Politis</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="ariana">
                <img src="img.jpg" alt="Ariana Brown"></img>
                <h2>Ariana Brown</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="colby">
                <img src="img.jpg" alt="Colby Mei"></img>
                <h2>Colby Mei</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        </Paper>
        </>
    );
};
 
export default About;