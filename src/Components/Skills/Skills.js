import React from 'react'; 

import './Styles.css';
const Skills = () => {
    return (
        <section id="skills">

            <div className="container">
                <h2>What Our Skills We Provide</h2>
                {/* <div className="row">

                <div className="col-md">
                        <div className="skills">
                            <h3>Web Design</h3>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="skills">
                            <h3>Wordpress</h3>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="skills">
                            <h3>Shopify</h3>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="skills">
                            <h3>Front End with React</h3>
                        </div>
                    </div>

                </div> */}
                
                <ul className="skillShots">
                    <li>Responsive Web Design</li>
                    <li>PSD to Wordpress</li>
                    <li>Wordpress Customization</li>
                    <li>Wordpress Theme Development</li>
                    <li>Shopify Theme Customization</li>
                    <li>Shopify Template Design with Liquid Coding</li>
                    <li>Front-End Design with  React Js</li>
                    
                    <li>CSS/CSS3</li>
                    <li>SASS</li>
                    <li>HTML5</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>PHP</li>
                    <li>MySql</li> 
                    <li>Liquid</li> 
                    
                </ul>

            </div> 

        </section>
    );
};

export default Skills;