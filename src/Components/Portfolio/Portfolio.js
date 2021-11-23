import React from 'react';
import { projectLink } from "./PortfolioList";
import Links from "./Links"; 
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-sm-8">
                            
                    <ul class="Portfolio">
                    {
                        projectLink.map(portfolio => <Links portfolioLink={portfolio} ></Links> )
                    }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;