import React from 'react'; 
import './Projects.css';



import boombycindyjoseph from '../../assets/images/projects/boombycindyjoseph.png';
import project2 from '../../assets/images/projects/project2.png';
import rslfunding from '../../assets/images/projects/rslfunding.png';
import happydose from '../../assets/images/projects/happydose.png';
import cooltrap from '../../assets/images/projects/cooltrap.png';
import ugreitmusic from '../../assets/images/projects/ugreitmusic.png';
import zep from '../../assets/images/projects/zep.png';
 
import MaskGroup from '../../assets/images/projects/MaskGroup.gif';

const Projects = () => {
    return (
        <section id="projects" className="mark"> 

            <div className="container">
                <div className="row row justify-content-between">
                    <div className="col-sm-12  ">
                        <h2>Shopify & Wordpress Projects</h2>
                      
                    </div>

                    <div className="col-sm-2 mt-5 pt-5">
                        <div className="shadow project">
                            <img src={MaskGroup} alt="" />
                            <a href="https://happydose.org/" target="blank">
                                <img src={happydose} alt="happydose" />
                            </a>
                        </div>

                        
                        <div className="shadow project">
                            <a href="https://www.boombycindyjoseph.com/pages/5-makeup-tips-for-older-women" target="blank">
                                <img src={boombycindyjoseph} alt="" />
                            </a>
                        </div>

                        
                       

                    </div>
                    <div className="col-sm-2">
                        <div className="shadow project">
                            <a href="https://www.cooltrap.com/" target="blank">
                                <img src={cooltrap} alt="cooltrap" />
                            </a>
                        </div>

                        
                        <div className="shadow project">
                            <a href="https://zep.ro" target="blank">
                                <img src={zep} alt="zep" />
                            </a>
                        </div>

                    </div>
                    <div className="col-sm-2 mt-5">

                        
                        <div className="shadow project">
                            <a href="" target="blank">
                                <img src={project2} alt="" />
                            </a>
                        </div>

                    </div>
                    <div className="col-sm-2 mt-5">

                        
                        <div className="shadow project">
                            <a href="" target="blank">
                                <img src={project2} alt="" />
                            </a>
                        </div>

                    </div>
                    <div className="col-sm-2 mt-5 pt-5">
                        <div className="shadow project">
                            <a href="https://www.rslfunding.com" target="blank">
                                <img src={rslfunding} alt="rslfunding" />
                            </a>
                        </div>

                        <div className="shadow project">
                            <a href="https://www.ugreitmusic.no/" target="blank">
                                <img src={ugreitmusic} alt="ugreitmusic" />
                            </a>
                        </div>

                    </div>

    

                </div>
            </div>
        </section>
    );
};

export default Projects;