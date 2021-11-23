import React from 'react';

import './Team.css';

import joy from '../../assets/images/zahidul-islam-joy.jpg';
import dibakor from '../../assets/images/Dibakor-Acharjee.jpg';
import Maksudul from '../../assets/images/Maksudul-Hasan-Rakib.jpg';

import gif from '../../assets/images/ezgif.com-gif-maker.gif';
import rony from '../../assets/images/rony.png';
import imran from '../../assets/images/Imran-Sikder.jpg'; 

const Team = () => {
    return (
        <section id="team"> 

            <div className="container">
                <div className="row  justify-content-between">

                <div className="col-sm-3">
                        <div className="team">
                            <img src={rony} alt="rony" className="img-fluid" />
                            <h3>Farid-Ul-Islam Rony</h3>
                            <p>Web Actor <br /> codexcode4@gmail.com</p> 
                        </div>
                        <div className="team">
                            <img src={Maksudul} alt="Maksudul Hasan Rakib" className="img-fluid" />
                            <h3>Maksudul Hasan Rakib</h3>
                            <p>UI Expert</p> 
                        </div>
                    </div>
                    <div className="col-sm-3 mt-5 pt-5">
                        <div className="team">
                            <img src={dibakor} alt="Dibakor Acharjee" className="img-fluid" />
                            <h3>Dibakor Acharjee</h3>
                            <p>React Developer</p> 
                        </div>
                        <div className="team">
                            <img src={imran} alt="rony" className="img-fluid" />
                            <h3>Imran Sikder</h3>
                            <p>Graphic Design Actor <br /> Sikder@gmail.com</p> 
                        </div>
                    </div>
                    <div className="col-sm-3 mt-5">
                        <div className="team">
                            <img src={joy} alt="Zahidul Islam Joy" className="img-fluid" />
                            <h3>Zahidul Islam Joy</h3>
                            <p>React Developer</p> 
                        </div> 
                    </div>
                </div>
                </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-8 py-5  ">
                         
                        <img src={gif} alt="" className="img-fluid"/>
                        <h1>Grow Up Your Business In Minutes With Your Hands</h1>
                        <h4>We hope you are a person who likes:</h4>
                        <ul>
                            <li>Solid and thoughtful markups</li>
                            <li>Universally designed solutions.</li>
                            <li>HTML / CSS, Javascript, jQuery.</li>
                            <li>E-Commerce Design, Solutions and Support</li>
                            <li>Elementor Pro, Divi Expert</li>
                            <li>WordPress Primium Theme</li>
                            <li>SEO Friendly</li>
                            <li>Super Fast Loaded Webpage</li>
                            <li>Elegent and Highly Convertion Design Work</li>
                            <li>Existing Site that needs a Facelift</li> 
                        </ul>

                        <p>We specialize in complex WordPress and wooCommerce projects. We specialize in WordPress starting from 2015. We’re not freelancers in common sense – we’re professional company with senior programmers working full day in office. Mathematics background and 5+ years of WordPress experience allow us to create complex, out of box plugins and themes. We do mostly projects related to development of WordPress themes and plugins from scratch. We may also do fixes tasks/projects though higher hours rate is used for that.</p>
                        <p>Area of expertise includes customizing of custom WordPress and WooCommerce themes, sites and plugins. We have a lot of experience of developing of e-commerce and properties sites also. We develop only custom light weight and fast themes as base. It allows to reach pixel perfect PSD/Sketch/XD to HTML convertion and good speed of the theme. Using of advanced custom fields and custom post types allows to get easy manageable theme suited only per your needs. You won’t deal with drag-n-drop editor when one inaccurate move crashes whole page. Your customer won’t wait tens of seconds while hundreds of not needed files of multi-purpose theme and its visual composer are loaded. We don’t accept projects that we can’t finish or we’re not sure we can finish successfully. If you start working with us you won’t be in situation when project is done for 90% (for personal or lack of skills reasons) and you have look for another developer to finish it. Sometimes I see projects like that when looking for new projects. Our clients have NEVER experienced situation like that with us. If you’re interested in honest and reliable partner we’re here to help in your projects.</p>
                        <p>Contact us for a digital coffee cup at <b>codexcode4@gmail.com</b></p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Team;