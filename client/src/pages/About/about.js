import React from "react";
import './about.css';
import { Paper } from "@mui/material";
import David from "../../images/david-pic.jpg"
import Ryan from "../../images/ryan-pic.jpg"
import Ariana from "../../images/ariana-pic.jpg"
import Colby from "../../images/colby-pic.jpg"

const About = () => {
    return (
        <>
        <Paper className="teamContent" sx={{borderRadius: '0px', border: '1px solid black', backgroundColor: 'whitesmoke', borderTop: "none", padding: "1rem"}}>
            <h1 className="aboutTitle">ABOUT US</h1>
                <p>Texture talk is a social media website for hair care and styling where users create profiles with tags specifying hair type, thickness, porosity, length, and color. Users share photos, videos, routines, and product reviews. The application facilitates easy searches, presenting profiles matching the user's specific criteria, providing inspiration and advice for personalized hair care routines and styles.</p>
            <h1 className="teamTitle">MEET THE TEAM</h1>
            <div className="team">
                <div className="david">
                    <img src={David} alt="David Sun" width={325} height={350}></img>
                    <h2>David Sun</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="ryan">
                    <img src={Ryan} alt="Ryan Politis" width={325} height={350}></img>
                    <h2>Ryan Politis</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="ariana">
                    <img src={Ariana} alt="Ariana Brown" width={325} height={350}></img>
                    <h2>Ariana Brown</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="colby">
                    <img src={Colby} alt="Colby Mei" width={325} height={350}></img>
                    <h2>Colby Mei</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </Paper>
        </>
    );
};
 
export default About;