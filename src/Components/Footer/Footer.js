import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logoblock.png';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-4">
                        <a href="./"><img src={logo} alt="" /></a>
                        <h2>  <br /> codexcode4@gmail.com</h2>
                     
                        <h2>
                            <a href="https://www.facebook.com/groups/shopifyfreelancingcommunity">Follow us on Facebook ></a>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="top-footer">
                <p>© 2021 codexcode. All rights Reserved. Developed with codexcode Platform</p>
            </div>
        </footer>
    );
};

export default Footer;