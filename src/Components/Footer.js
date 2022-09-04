import "./FooterStyles.css"

import React from "react";

import {FaHome, FaPhone, FaMailBulk, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"fff",marginRight:"2rem"}}/>
                <div>
                    <p>Kavi Nagar</p>
                    <p>Ghaziabad, Uttar Pradesh</p>
                </div>
            </div>
            <div className="phone">
                <h4>
                    <FaPhone size={20} style={{color:"fff",marginRight:"2rem"}}/>
                    7017841011
                </h4>
            </div>
            <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{color:"fff",marginRight:"2rem"}}/>
                    aaarushigarg18@gmail.com
                </h4>
            </div>
        </div>
        <div className="right">
            <h4>About</h4>
            <p>This is me Aarushi Garg, final year student at ABES Engineering College pursuing B.Tech. in Information Technology. </p>
            <div className="social">
            <FaInstagram size={30} style={{color:"fff",marginRight:"1rem"}}/>
            <FaTwitter size={30} style={{color:"fff",marginRight:"1rem"}}/>
            <FaLinkedin size={30} style={{color:"fff",marginRight:"1rem"}}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer