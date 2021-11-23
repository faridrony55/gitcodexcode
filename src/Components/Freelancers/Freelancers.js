import React from 'react';
import './Freelancers.css';


import SafinAhmed from '../../assets/images/SafinAhmed.jpg'; 
import paran from '../../assets/images/Md-Paran-Islam.jpg';
import ShafiqulSakil from '../../assets/images/Shafiqul-Sakil.jpg'; 
import musashakil from '../../assets/images/musa-shakil.jpg';
import Avatar from '../../assets/images/Female-Avatar-5.svg'; 
import MdFazlaRabby  from '../../assets/images/MdFazlaRabby.jpg';

const Freelancers = () => {
    return (
        <section id="freelancers">
            
            <div className="container">
                <div className="row g-2 justify-content-center">

                    <div className="col-sm-1">
                        <div class="zoom">
                            <p>Safin Ahmed</p>
                            <img src={SafinAhmed} alt="SafinAhmed" className="img-fluid" />
                        </div> 
                    </div>
                    <div className="col-sm-1">
                        <div class="zoom">
                            <p>Paran Islam</p>
                            <img src={paran} alt="paran" className="img-fluid" />
                        </div> 
                    </div>
                    <div className="col-sm-1">
                        <div class="zoom">
                            <p>Shafiqul Sakil</p>
                            <img src={ShafiqulSakil} alt="ShafiqulSakil" className="img-fluid" />
                        </div> 
                    </div>
                    <div className="col-sm-1">
                        <div class="zoom">
                            <p>Musa Sakil</p>
                            <img src={musashakil} alt="ShafiqulSakil" className="img-fluid" />
                        </div> 
                    </div>
                    <div className="col-sm-1">
                        <div class="zoom">
                            <p>Ishrat Jahan Nishat</p>
                            <img src={Avatar} alt="Ishrat Jahan Nishat" className="img-fluid" />
                        </div> 
                    </div>
                    <div className="col-sm-1">
                        <div class="zoom">
                            <p>Md Fazla Rabby</p>
                            <img src={MdFazlaRabby} alt="Ishrat Jahan Nishat" className="img-fluid" />
                        </div> 
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Freelancers;