import React, { useEffect, useState } from 'react';
import CountryDetails from './CountryDetails';
import './Country.css'

const Country = () => { 

    //const handleRaligion = () => {console.log('dhormo')}

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch(' https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            //.then(data => setCountries(data))
                
                .then(data => {
                    setCountries(data);
                    console.log(data);
                    const names =  data.map(country => country.name)
                    console.log(names)
                })
                  
            .catch(error => console.log(error))

            }, [])
       
    return (
        <div className="container py-5 my-5"> 

                <h3>There sre : {countries.length} Countries</h3> 

               
               
                <div className="row justify-content-center">
                    {
                        countries.map(country => <CountryDetails name={country.name} flag={country.flag} capital={country.capital}></CountryDetails> )
                    }
                </div>

        </div>
    );
};

export default Country;