import React from 'react';
import myPic from '../../assets/images/nou.JPG';
import faridrony from '../../assets/images/faridrony.jpg';
import Social from '../Social/Social';
import './About.css';
import mike from '../../assets/images/mike_prev_ui.png'
const About = () => {
    const style = {
        fontSize: '3em', 
        lineHeight: '1', 
        fontWeight: '900'  
    }
  
    const bg = { 
        paddingTop:'50px'
    }
 
 
    
     
  
    return (
            <section style={bg}>
                <div className="container">
                    <div className="row justify-content-between py-5">
                        <div className="col-sm-8">
                            <h2 style={style}>This is <span style={{color:'#47bd75'}}>Farid Rony</span> <br /> Try to be a Good Man, Good Mentor</h2>
                             
                            <p>I have more than 7 years of experience with a vast majority dedicated to operational and technical. I constantly challenge myself to solve problems by Coding, Development and I love making exclusive Shopify Store. Feel free to contact me with any project.</p>
                            <h3 >Work Background</h3>

                            <h5 >Lead Mentor <i>- Shikhbeshobai | 2017 - continue</i></h5>
                            <p>Working as Lead mentor at Shikhbeshobai Mirpur Branch. Leading Team and Mentoring to make Skilled Freelancers</p>
                            <h5  >CODE MENTOR ON WEB DESIGN <i>- Coderstrust | 2016 - 2017</i></h5>
                            <p>My main responsibilities was Local and Global online support and to make the students skillful on Web design and Wordpress development. Create a perfect freelancer on the global market place.</p>
                            <h5 >WEB and FREELANCE MENTOR <i>- LEDP GOV. PROJECT 2017 , 2020</i></h5>
                            <p>My main responsibilities are Trained Up as a Perfect freelancer Based on web design and development and to make the students skillful for long term freelancing career in the global marketplace.</p>


                            <h5>My key Expertise is </h5>
                                <ul>
                                    <li>Shopify Store Design</li>
                                    <li>Customization</li>
                                    <li>Wordpress Theme Development</li>
                                    <li>Theme Customization</li>
                                    <li>Front End Design</li>
                                    <li>Front End with React</li>
                                    <li>SASS</li>
                                    <li>Bootstrap 5</li>
                                    <li>Javascript</li>
                                    <li>PHP, MySQL</li>
                                    <li>Liquid</li>
                                    <li>React Js</li>
                                </ul> 
                              



 
                            <Social></Social>
                            
                            <img src={myPic} alt="" className="img-fluid " style={{borderRadius:'7px'}} />

                        </div>
                        <div className="col-sm-3">
                            <div className="sticky">
                                <h3  >Join our <b>Most Popular Community</b> <a target="_blank" href="https://www.facebook.com/groups/shopifyfreelancingcommunity">Shopify Freelancing Community</a></h3>
                            </div>
                            <div className="mike">
                               <img src={faridrony} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div> 
        </section>
    );
};

export default About;