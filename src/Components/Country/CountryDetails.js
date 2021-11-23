import React from 'react';
//import Button from 'react-bootstrap/Button'

const CountryDetails = (props) => {


 //const handleRaligion = props.handleRaligion;
    return (
        <div className="col-sm-4">
             <div className=" p-2 mb-4 border  countryList">
                 <img src={props.flag} className="flag"/>
                <span> {props.name}
                <i>{props.capital}</i></span>
              
                
             </div>
        </div>
    );
};

export default CountryDetails;