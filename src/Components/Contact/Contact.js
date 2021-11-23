import React from 'react';
import './Contact.css'
import macf from '../../assets/images/macf.jpg'
import macb from '../../assets/images/macb.jpg'

const Contact = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{height:'100vh'}}>
                <div className="col-sm-8">

                    <h1 className="mail">codexcode4@gmail.com</h1>

                    {/* <div className="hvr-img">
                        <img src={macf} alt="" className="macf img-fluid"/>
                        <img src={macb} alt=""  className="macb img-fluid" />
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Contact;